const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient
const connectionString = "mongodb+srv://sreehari:sreehari@cluster0.7p8kq.mongodb.net/BlogApp?retryWrites=true&w=majority";
var db

MongoClient.connect(connectionString, {
    useUnifiedTopology: true
  }, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
    db = client.db('BlogApp')
  })

app.get('/', function(req, res) {
    res.send('Hello World')
})
app.get('/getsharedCollection', (req, res) => {    
    db.collection('posts').find().toArray((err, result) => {
        if (err) return console.log(err)
        res.send(result)
      })
  })

app.listen(3000, function() {
    console.log('listening on 3000')
})