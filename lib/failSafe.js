const failSafe = handler => async (...args) => {
  try {
    return await handler(...args);
  } catch (e) {
    console.error(`Error: ${e.message}`);
    const message = process.env.NODE_ENV === 'production' ? 'Internal server error' : e.message

    return {
      statusCode: 500,
      body: {
        message,
      },
    };
  }
};

module.exports = failSafe;
