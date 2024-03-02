module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello From AWS Lambda ;)",
        input: event,
      },
      null,
      2
    ),
  };
};
