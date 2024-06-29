const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, () => {
  console.log('Connected to DB successfully');
});

 /*const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },  
});*/

//const User = mongoose.model('User', userSchema);

app.use(cors())
app.use(express.urlencoded({ extended: true}))
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// POST to /api/user username
app.post('/api/users', async (req, res) => {
  res.send(req.body.username);
  //const username = req.body.username;

  /*const user = await User.create({
    username,
  });

  res.json(user);*/
});


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
