// server: nodeJs file, expressJs
const bodyParser = require("body-parser");
const cors = require('cors');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.get('/', (req, res) => {
  // console.log(req);
  res.send('<h1>The server works</h1>');
});
app.get('/tasks', (req, res) => {
  res.json(tasks);
});
app.get('/tasks/:id', (req, res) => {
  // let reqestedId = parseInt(req.originalUrl.slice(7));
  let reqestedId = parseInt(req.params.id); 
  console.log(reqestedId)
  let result = tasks.filter(elem => {
    return elem.id === reqestedId;
  });
  res.json(result);
});



//Content-Type: application/json

app.post('/tasks', (req, res) => {
  console.log('post tasks', req.body);
  tasks.push(req.body);
  res.json(tasks);
});
// @method put 
// @description toggle is complete for a specific id 
app.put('/tasks/:id', (req, res) => {
  let reqestedId = parseInt(req.params.id); 
  let result = tasks.map(elem => {
    if(reqestedId === elem.id) {
      elem.isCompleted = !elem.isCompleted;
    }
    return elem;
  });
  res.json(result);
});
// app.delete('/tasks/', (req, res) => { // send id with request body.
app.delete('/tasks/:id', (req, res) => {
  let reqestedDeleteId = parseInt(req.originalUrl.slice(7));
  for (let index = 0; index < tasks.length; index++) {
    if(tasks[index].id === reqestedDeleteId) {
      tasks.splice(index, 1);
    }
  }
  res.json(tasks);
});
/*
app.get('/roaa', (req, res) => {
  console.log('Roaa');
  res.json('Nomaan');
});
*/
const PORT = 4000;
app.listen(PORT, () => console.log(`listen to port ${PORT}`));

const tasks = [
  {
    id: 1,
    title: "Download Zoom",
    isCompleted: false
  },
  {
    id: 2,
    title: "Eat Fried Chicken",
    isCompleted: true
  },
  {
    id: 3,
    title: "Play Games",
    isCompleted: false
  },
  {
    id: 4,
    title: "Go for Shopping",
    isCompleted: true
  },
  {
    id: 5,
    title: "Watch Movie",
    isCompleted: false
  }
]

