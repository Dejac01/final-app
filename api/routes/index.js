var express = require("express");
var router = express.Router();
const Lessons = require("../models/lessons");
const Students = require("../models/students");
const Teachers = require("../models/teachers");

// const Quotes = require ("../Quotes");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/lessons", (req, res) => {
  Lessons.find({}, (err, allLessons) => {
    if (err) {
      console.error(err);
    } else {
      console.log("allLessons", allLessons);
      res.send(allLessons);
    }
  });
});

router.get("/lessons/_id", function (req, res) {
  Lessons.find({ id: req.params.id }, (err, allLessons) => {
    if (err) {
      console.error(err);
    } else {
      console.log("allLessons", allLessons);
      res.send(allLessons);
    }
  });
});

router.get("/quote", function (req, res) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "440d7f76bbmsh4facf782795d9d5p1b51a0jsn6de6932883eb",
      "X-RapidAPI-Host":
        "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
    },
  };

  const url =
    "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info";
  res.send({ text: "drop it lik its hot", author: "lil wayne" });
  // fetch(url, options).then((response) => res.send(response.json()));
  // .then((data) => {
  // (res.send(data))})
  // .catch(err => console.error(err));
});

router.get("/students", (req, res) => {
  Students.find({}, (err, allStudents) => {
    if (err) {
      console.error(err);
    } else {
      console.log("allStudents", allStudents);
      res.send(allStudents);
    }
  });
});

// get students by ID
router.get("/students/:studentId", function (req, res) {
  console.log(req.params);
  Students.find({ _id: req.params.studentId }, (err, student) => {
    if (err) {
      console.error(err);
    } else {
      console.log("students", student);
      res.send(student);
    }
  });
});

//Log In Function
router.get("/auth/", function (req, res) {
  console.log(req.query);
  // checking for teacher query with contact info and password
  if (
    //make string of a value of 1 or 0 and turn it into a or number, once turned into a number, then turn number into boolean, forms and url`s always turn numbers into strings
    Boolean(Number(req.query.teacher)) &&
    req.query.contactInfo &&
    req.query.pw
  ) {
    Teachers.find(
      { contactInfo: req.query.contactInfo, pw: req.query.pw },
      (err, teacher) => {
        if (err) {
          console.error(err);
        } else {
          console.log("teachers", teacher);
          res.send(teacher);
        }
      }
    );
  } else if (req.query.contactInfo && req.query.pw) {
    Students.find(
      { contactInfo: req.query.contactInfo, pw: req.query.pw },
      (err, student) => {
        if (err) {
          console.error(err);
        } else {
          console.log("students", student);
          res.send(student);
        }
      }
    );
  }
});

router.get("/teachers", (req, res) => {
  Teachers.find({}, (err, allTeachers) => {
    if (err) {
      console.error(err);
    } else {
      console.log("allTeachers", allTeachers);
      res.send(allTeachers);
    }
  });
});

router.get("/teachers/:_id", function (req, res) {
  Teachers.find({ _id: req.params._id }, (err, allTeachers) => {
    if (err) {
      console.error(err);
    } else {
      console.log("allTeachers", allTeachers);
      res.send(allTeachers);
    }
  });
});

module.exports = router;
