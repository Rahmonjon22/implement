const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

//Middleware
app.set('view engine', 'ejs');


app.get('/', (req, res)=>{
    res.render('index');
})

app.get('/', (req, res)=> {
    res.send('hello')
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})