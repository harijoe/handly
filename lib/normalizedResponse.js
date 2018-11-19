const normalizedResponse = config => {
  return {
    after: (handler, next) => {
      const { body, headers, ...other } = handler.response;
      console.log(headers, other);
      handler.response = {
        body: JSON.stringify(body),
        headers: { ...headers, 'Content-Type': 'application/json' },
        ...other,
      };
      next();
    },
  };
};

module.exports = normalizedResponse;
