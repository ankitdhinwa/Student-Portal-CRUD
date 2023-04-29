const mongoose = require("mongoose");
const { Config } = require("../config/config");

module.exports.ConnectDB = function () {
  mongoose
    .connect(
      `mongodb+srv://root:${Config.Password}@cluster0.t7tgqa5.mongodb.net/employee_db?retryWrites=true&w=majority`
    )
    .then(() => {
      console.log("Connected to the Database");
    })
    .catch((err) => {
      console.log(err);
    });
};
