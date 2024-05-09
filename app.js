const express=require('express')
const hbs = require('hbs');
require('dotenv').config();
const app = express()
const port=process.env.PORT;
app.set('view engine','hbs');

hbs.registerPartials(__dirname+'/views/partials');
//Para servir contenido estatico
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('home',{
        nombre: 'Armando David',
        titulo: 'Curso de Node'
    });
});

app.get('/hola-mundo',(req,res)=>{
        res.send('Hola Mundo en su respectiva ruta')
});

app.get('/elements',(req,res)=>{
    res.render('elements',{
        nombre: 'Armando David',
        titulo: 'Curso de node'
    })
});

app.get('/generic',(req,res)=>{
    res.render('generic',{
        nombre: 'Armando David',
        titulo: 'Curso de node'
    })
});

app.get('*',(req,res)=>{
        res.sendFile(__dirname+'/public/404.html');
});

app.listen(port,() =>{
        console.log(`Example app listening al http://localhost:${port}`)
});