// CRUD: Create, Read, Update, Delete
import express from 'express';

const router = express.Router();
const students = [
  { id: 1, name: 'Alice' },
  {
    id: 2,
    name: 'Bob',
  },
];

//getall
router.get('/', (req, res) => {
  res.status(200).send(students);
});

//get one
router.get('/:id', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  console.log(req.body);
  // if (Object.keys(req.query).length > 0) {
  //   const { name } = req.query;
  //   res.send(students.find((student) => student.name === name));
  // } else {
  //   res.send(students);
  // }

  const student = students.find(
    (student) => student.id === Number(req.params.id)
  );

  res.status(200).send(students);
});

//create
router.post('/', (req, res) => {
  students.push(req.body);
  res.json(students);
});

//update
router.patch('/:id', (req, res) => {
  const { id } = req.params;

  const newStudents = students.map((item) => {
    if (item.id === +id) {
      console.log('run');
      return req.body;
    }
    return item;
  });
  console.log(newStudents);
  res.json(newStudents);
});

//update
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const item = students.filter((item) => item.id !== +id);
  res.json(item);
});

// router.get('/create', (req, res) => {});
// router.get('/read', (req, res) => {
//   res.send('Read students');
// });
// router.get('/update', (req, res) => {});
// router.get('/delete', (req, res) => {});

//CRUD
//Create = post
//Update = put/patch
//Read = get
//Delete = delete

export default router;
