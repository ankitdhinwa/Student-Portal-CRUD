const mongoose = require("mongoose");
const StudentSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true
  },
  studentAge: {
    type: String,
    required: true
  },
  studentRoll: {
    type: String,
    required: true
  },
  studentDept: {
    type: String,
    required: true
  },
  studentsFatherName: {
    type: String,
    required: true
  },
  studentsMotherName: {
    type: String,
    required: true
  }
});
const StudentModel = mongoose.model("student", StudentSchema);
module.exports = StudentModel;
