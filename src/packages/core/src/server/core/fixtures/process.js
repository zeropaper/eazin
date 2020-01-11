module.exports = (models) => Object.keys(models)
  .reduce((acc, val) => {
    acc[val] = models[val]
      .reduce((instructions, instruction) => [
        ...instructions,
        ...instruction.ids
          .map((id) => ({
            ...(typeof instruction.data === 'function'
              ? instruction.data(id)
              : instruction.data),
            _id: id,
          })),
      ], []);

    return acc;
  }, {});
