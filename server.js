const express = require('express');
const hbs =require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname +'/public'));
hbs.registerPartials(__dirname + '/views/partials')

app.get('/', (req, res)=> {
    res.send('i am started');
});

app.get('/about', (req, res) =>{
    res.render('about.hbs', {
        pageTitle: 'About page is here dude',
        currYear: new Date().getFullYear
    });
});

app.listen(3000, ()=>{
    console.log('server is up on port 3000');
});