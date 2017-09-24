var Todo=require('../db/model').Todo;
const route=require('express').Router();

route.get('/:id',function(req,res){
  console.log("enter");

  Todo.findOne({
    where:{
      id:req.params.id
    }
  }).then((todo)=>{
    if(todo){
      res.status(200).send(todo);
    }
    else
      res.status(500).send("todo with id="+req.params.id+"does not exist");

  }).catch(()=>{
    res.status(500).send("error while fetching todo with id="+req.params.id);

  })
});

route.get('/',function(req,res){
  Todo.findAll().then((todos)=>{
    res.status(200).send(todos);
  }).catch(()=>{
    res.status(500).send("error while fetching the todos");
  })
});

route.post('/',function(req,res){
  Todo.create({
    task:req.body.task,
    completed:false
  }).then(()=>{
    res.status(200).send("todo added successfully");
  }).catch(()=>{
    res.status(500).send("error while adding todo");

  })
});

module.exports=route
