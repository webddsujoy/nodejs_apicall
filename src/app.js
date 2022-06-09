
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const hbs = require('hbs');

const path_static= path.join(__dirname, "../public");
const path_mainview= path.join(__dirname, "../templete/views");
const path_subviwe= path.join(__dirname, "../templete/views/includ");
 app.set('view engine', 'hbs');
 app.set('views', path_mainview)
hbs.registerPartials(path_subviwe)
 app.use(express.static(path_static));




app.get('/', (req, res)=>{
    res.render('index')
})
app.get('/aboutus', (req, res)=>{
    res.render('about')
})
app.get('/weather', (req, res)=>{
    res.render('weather')
})
app.get('*', (req, res)=>{
    res.render("404")
})
app.listen(port,()=>{console.log('Sever trun on')})