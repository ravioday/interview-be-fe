"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello World! Your function executed successfully!",
      },
      null,
      2
    ),
  };
};