const express = require('express')
const cors = require('cors')

const bodyParser = require('body-parser');
const app = express()
app.use(cors())
app.use(express.json())
const users= ['asad','jamal','kamal','amal'] ;
//get
app.get('/',(req,res) => {
  res.send('Now I will continue coding with full concentration')
});
app.get('/fruits/banana', (req,res) => {
  res.send({
    fruit:'banana',
    quantity:1000,
    price:20000,
  })
});
app.get('/users/:id',(req,res) => {
 const userId=req.params.id;
 const name=users[userId]
 res.send({userId,name});
});

//post
app.post('/newUser',(req,res) => {
  // save to database
  const user=req.body;
  user.id=55;
  res.send(user);
})
app.listen(3000,() => console.log('Listening to port 3000'))