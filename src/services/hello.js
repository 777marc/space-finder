exports.main = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(
      `Hello From Lambda, I'm reading from ${process.env.TABLE_NAME}`
    ),
  };
};
