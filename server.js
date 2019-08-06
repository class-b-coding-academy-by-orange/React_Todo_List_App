// server: nodeJs file, expressJs
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // console.log(req);
  res.send('<h1>The server works</h1>');
});

app.get('/1', (req, res) => {
  res.send(req.url);
});
app.get('/tasks', (req, res) => {
  res.json(tasks);
});
app.get('/tasks/:id', (req, res) => {
  let reqestedId = parseInt(req.originalUrl.slice(7));
  let result = tasks.filter(elem => {
    return elem.id === reqestedId;
  });
  res.json(result);
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

