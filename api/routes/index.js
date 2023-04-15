var express = require('express');
var router = express.Router();
const Lessons = require("../models/lessons");
const Students = require("../models/students");
const Messages = require("../models/messages");
const Teachers = require("../models/teachers");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/lessons', (req, res)=>{
  Lessons.find({}, (err, allLessons) => {
    if (err) {
      console.error(err);
    } else {
      console.log("allLessons", allLessons); 
      res.send (allLessons)
    }
  });
});

router.get('/lessons/_id', function (req,res){
  Lessons.find({id:req.params.id}, (err, allLessons) => {
    if (err) {
      console.error(err);
    } else {
      console.log("allLessons", allLessons); 
      res.send (allLessons)
    }
  })
});


router.get('/messages', (req, res)=>{
  Messages.find({}, (err, allMessages) => {
    if (err) {
      console.error(err);
    } else {
      console.log("allMessages", allMessages); 
      res.send (allMessages)
    }
  });
});

router.get('/messages/sender/:sender', function (req,res){
  Messages.find({sender:req.params.sender}, (err, senderMessages) => {
    if (err) {
      console.error(err);
    } else {
      console.log("senderMessages", senderMessages); 
      res.send (senderMessages)
    }
  })
});

router.get('/messages/reciever/:reciever', function (req,res){
  Messages.find({reciever:req.params.reciever}, (err, recieverMessages) => {
    if (err) {
      console.error(err);
    } else {
      console.log("recieverMessages", recieverMessages); 
      res.send (recieverMessages)
    }
  })
});


router.get('/students', (req, res)=>{
  Students.find({}, (err, allStudents) => {
    if (err) {
      console.error(err);
    } else {
      console.log("allStudents", allStudents);
      res.send (allStudents)
    }
  });
});

router.get('/students/:studentId', function(req, res){
  Students.find({"id":req.params.studentId}, (err, student) => {
    if (err) {
      console.error(err);
    } else {
      console.log("students", student);
      res.send (student)
    }
  });
});

router.get('/teachers', (req, res)=>{
  Teachers.find({}, (err, allTeachers) => {
    if (err) {
      console.error(err);
    } else {
      console.log("allTeachers", allTeachers);
      res.send (allTeachers)
    }
  });
});

router.get('/teachers/_id', function (req,res){
  Teachers.find({id:req.params.id}, (err, allTeachers) => {
    if (err) {
      console.error(err);
    } else {
      console.log("allTeachers", allTeachers); 
      res.send (allTeachers)
    }
  })
});

module.exports = router;
