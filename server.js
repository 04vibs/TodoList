const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const app=express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use('/todos',require('./api'));

app.listen(9000,()=>{
console.log(" server is running at http://localhost:9000");
});
