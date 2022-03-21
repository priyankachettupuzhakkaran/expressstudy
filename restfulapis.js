const http=require('http');
const fs=require('fs')
const express=require('express');
const { Console, countReset } = require('console');
const app= express()
const buffer=fs.readFileSync("F:/Desktop Backup/priyanka/objectout.txt")
const filecontent=JSON.parse(buffer)
//const filecontent=buffer.toString()  
console.log(filecontent)
const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
var array=[
    {
        id:"1",
        name:"course1"
    },
    {
        id:"2",
        name:"course2"
    },
    {
        id:"3",
        name:"course3"
    }
]
app.get('/questions', (req,res)=>{
    res.send(filecontent)
})
app.get('/questions/:id', (req,res)=>{
    const questionns=filecontent.find(c=>c.questionno ===req.params.id);
    
    console.log(questionns)
    if(!questionns) res.status(404).send("requested question not found")
    else res.send(questionns);
})


app.post('/newquestion', (req, res) => {
    //if(!req.body.question){
        //res.status(400)
        //return;
    //}
    //console.log(req)
    //res.send('hello priyanka')
    //res.send(req.body)
//})
    const new_questions= {
        questionno:filecontent.length+1,
        question:req.body.question,
        optiontype:req.body.optiontype,
        options:req.body.options,
        answer:req.body.answer
    };
    console.log(new_questions);
    filecontent.push(new_questions);
    res.send(filecontent);
  res.send("POST Request Called");
});
//app.put('/questions:id',(req,res)=>{
    
//})
app.listen(3000,()=>{
    console.log('listening to http://localhost:3000...');
})    