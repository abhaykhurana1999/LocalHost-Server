
const express=require('express');

const app=express();

app.use(express.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    res.send("<h1>Hello Server</h1>")
})

app.get('/:city/:greeting',(req,res)=>{

    res.send(req.params.greeting +'to'+ req.params.city)
})


app.get('/greet',(req,res)=>{
    let person ='Guest'
    if(req.query.person)
    {
        person=req.query.person
    }
    res.send('Good Morning '+ person)
})

app.post('/greet',(req,res)=>{
    let person ='Guest'
    if(req.body.person)
    {
        person=req.body.person
    }
    res.send('Good Night '+ person)
})

app.get('/form',(req,res)=>{
    res.sendFile(__dirname + '/file/form.html')
})

app.listen(4444,()=>{
    console.log("Server started at localhost http://localhost:4444");
})