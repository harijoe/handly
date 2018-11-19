const failSafe = handler => async (...args) => {
  try {
    return await handler(...args);
  } catch (e) {
    console.error(`Error: ${e.message}`);
    return {
      statusCode: 500,
      body: {
        message: 'Internal server error',
      },
    };
  }
};

module.exports = failSafe;
