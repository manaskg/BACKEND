const express = require('express');

const app = express()

const notes = []

app.use(express.json())

app.get('/',(req, res)=> {
    res.send('helloo notes app');
    
})

app.post('/notes', (req,res) =>{
    notes.push(req.body)

    res.send('note created')
})

app.get('/notes', (req,res)=> {
    res.send(notes);
    console.log(notes);
})

app.listen(3000, ()=> {
    console.log('app is listening on port 3000');
    
})