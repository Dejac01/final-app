require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const mime = require('mime');

// ----------[MiddleWare]
// app.set("view engine", "jsx");
// // ---> This allows your ExpressApp to have a view on browser
// app.engine("jsx", require("express-react-views").createEngine());
// ---> This instantiates the view engine& creates an instance of the view engine created above
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public',));



// --> This parses incoming requests with urlencoded payloads and is based on a middleware called body-parser.
app.use(methodOverride("_method"));
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});
// -----> Instantiates Middleware to be executed during requestCycle.
mongoose.connect(
  "mongodb+srv://deja-user1:deja456@cluster0.ovscphh.mongodb.net/perscholas?retryWrites=true&w=majority",
  { useNewUrlParser: true,
    useUnifiedTopology: true,}
);

mongoose.set("strictQuery", true);
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

/////////////Routes


// Test.find({}, (err, allTest) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("allTest", allTest);
//   }
// });

// Test.find({"greet": "hello world"}, (err, test) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log("test", test);
//     }
// }); 

app.get('/', (req, res) => {
 res.sendFile(__dirname + "/public/index.html")
});

app.get('/aut', (req, res) => {
  if(req.params.student){
    // find the student with matching contact infor and pw
    // redirect to view
  }
  else{
    // find the teach with matching contact info and pw
    //redirect to view
  }
});


app.get('/lessons', (req, res)=>{
  Lessons.find({}, (err, allLessons) => {
    if (err) {
      console.error(err);
    } else {
      console.log("allLessons", allLessons); 
      res.send (allLessons)
    }
  });
});

app.get('/lessons/_id', function (req,res){
  Lessons.find({id:req.params.id}, (err, allLessons) => {
    if (err) {
      console.error(err);
    } else {
      console.log("allLessons", allLessons); 
      res.send (allLessons)
    }
  })
});


app.get('/messages', (req, res)=>{
  Messages.find({}, (err, allMessages) => {
    if (err) {
      console.error(err);
    } else {
      console.log("allMessages", allMessages); 
      res.send (allMessages)
    }
  });
});

app.get('/messages/sender/:sender', function (req,res){
  Messages.find({sender:req.params.sender}, (err, senderMessages) => {
    if (err) {
      console.error(err);
    } else {
      console.log("senderMessages", senderMessages); 
      res.send (senderMessages)
    }
  })
});

app.get('/messages/reciever/:reciever', function (req,res){
  Messages.find({reciever:req.params.reciever}, (err, recieverMessages) => {
    if (err) {
      console.error(err);
    } else {
      console.log("recieverMessages", recieverMessages); 
      res.send (recieverMessages)
    }
  })
});


app.get('/students', (req, res)=>{
  Students.find({}, (err, allStudents) => {
    if (err) {
      console.error(err);
    } else {
      console.log("allStudents", allStudents);
      res.send (allStudents)
    }
  });
});

app.get('/students/:studentId', function(req, res){
  Students.find({"id":req.params.studentId}, (err, student) => {
    if (err) {
      console.error(err);
    } else {
      console.log("students", student);
      res.send (student)
    }
  });
});


app.get('/teachers', (req, res)=>{
  Teachers.find({}, (err, allTeachers) => {
    if (err) {
      console.error(err);
    } else {
      console.log("allTeachers", allTeachers);
      res.send (allTeachers)
    }
  });
});

app.get('/teachers/_id', function (req,res){
  Teachers.find({id:req.params.id}, (err, allTeachers) => {
    if (err) {
      console.error(err);
    } else {
      console.log("allTeachers", allTeachers); 
      res.send (allTeachers)
    }
  })
});

app.get('/views/new', (req, res) => {
  res.render('New');
});

app.get('/views/student_comp/dashboard', (req, res) => {
  console.log("dashboard");
  res.send("Hello World");
});



// app.get('/test', (req, res)=>{
//     Test.find({}, (error, allTest)=>{
//         res.render('Index', {
//             test: alltest
//         });
//     });
// });

app.listen(3000, () => {
  console.log("listening");
});
