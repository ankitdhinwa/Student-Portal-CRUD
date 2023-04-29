const StudentModel = require("../models/studentModel");

module.exports.HomeController = (req, res) => {
  res.render("home");
};
module.exports.InsertPageController = (req, res) => {
  res.render("insert");
};
module.exports.UpdatePageController = (req, res) => {
  res.render("update");
};
module.exports.DeletePageController = (req, res) => {
  res.render("delete");
};
module.exports.SearchPageController = (req, res) => {
  res.render("search");
};
module.exports.InsertionController = (req, res) => {
  const { name, age, roll, dept, father, mother } = req.body;
  const student = new StudentModel({
    studentAge: age,
    studentDept: dept,
    studentName: name,
    studentRoll: roll,
    studentsFatherName: father,
    studentsMotherName: mother
  });
  student.save().then(() => {
    res.json({
      message: "Data saved successfully"
    });
  });
};
module.exports.UpdationController = (req, res) => {
  const { name, age, roll, dept, father, mother, id } = req.body;
  StudentModel.updateOne(
    { _id: id },
    {
      $set: {
        studentAge: age,
        studentDept: dept,
        studentName: name,
        studentRoll: roll,
        studentsFatherName: father,
        studentsMotherName: mother
      }
    }
  ).then(() => {
    res.json({
      message: "Data updated successfully"
    });
  });
};
module.exports.DeletionController = (req, res) => {
  const { id } = req.body;
  StudentModel.deleteOne({ _id: id }).then(() => {
    res.json({
      message: "Data deleted successfully"
    });
  });
};
module.exports.SearchController = (req, res) => {
  const { id } = req.body;
  StudentModel.findOne({ _id: id }).then((response) => {
    res.json({
      data: response
    });
  });
};
