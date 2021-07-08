const router = require("express").Router();
let Student = require("../models/student");

// router.route("/add").post()
router.post("/add", (req, res) => {
  const newStudent = new Student({
    name: req.body.name,
    age: Number(req.body.age),
    gender: req.body.gender,
  });

  newStudent
    .save()
    .then(() => {
      res.json("Student Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/", (req, res) => {
  Student.find()
    .then((students) => {
      res.json(students);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
