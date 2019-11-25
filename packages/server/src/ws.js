const socketIo = require('socket.io');

module.exports = function initWS(httpServer) {
  const io = socketIo(httpServer, {
    serveClient: false,
    cookie: false,
  });

  const ids = {};
  const socketId2MeshUUID = (socketId) => Object.keys(ids)
    .find((meshUUID) => (ids[meshUUID].socket.id === socketId));

  const doWith = (method, ...args) => (id) => (ids[id] && ids[id].socket && ids[id].socket[method](...args));

  const removeSocket = (socket) => {
    const meshUUID = socketId2MeshUUID(socket.id);
    if (!meshUUID) return;

    delete ids[meshUUID];

    Object.keys(ids)
      .filter((id) => id !== meshUUID)
      .forEach(doWith('emit', 'peer left', { id: meshUUID }));
  };

  io.on('connection', (socket) => {
    socket.on('end', () => removeSocket(socket));
    socket.on('error', () => removeSocket(socket));
    socket.on('disconnect', () => removeSocket(socket));

    socket.on('setidentity', (identity) => {
      const {
        nickname,
        meshUUID,
      } = identity;

      ids[meshUUID] = ids[meshUUID] || {
        nickname,
        socket,
      };

      Object.keys(ids)
        .filter((id) => id !== meshUUID)
        .forEach(doWith('emit', 'new peer', { id: meshUUID }));
    });

    socket.on('offer connection', ({ peer, offer }, done) => {
      if (!ids[peer].socket) {
        done({ error: 'No sockets' });
        return;
      }

      ids[peer].socket.emit('incoming offer', { offer }, done);
    });

    socket.on('chat message', (msg, done) => {
      const { to } = msg;
      const from = socketId2MeshUUID(socket.id);
      if (!from) {
        done({ error: 'missing from' });
        return;
      }
      const updated = { ...msg, from };

      ids[to].socket.emit('chat message', updated);

      done({
        ...updated,
        sent: Date.now(),
      });
    });
  });
};
