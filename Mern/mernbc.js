const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser')
app.use(cors());
app.use(bodyparser.json());
const emptArray = [];
app.post('/submitFormData', (req, res)=>{
  const formData = req.body;
//   console.log(`got form data ${formData.name}, ${formData.email}`);
emptArray.push(formData);
  res.json(formData);
})
app.get('/getSubmittedFormData', (req, res)=>{
    const formData = req.body;
    res.json(emptArray);
})
app.get('/getData', (req, res)=>{
    res.send("Hello world");
});

app.listen(5000, console.log('server is listning on 5000'));