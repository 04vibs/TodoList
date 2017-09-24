const Sequelize=require("sequelize");

const db=new Sequelize({

  database:'statusbrew',
  username:'root',
  password:'puri',
  host: 'localhost',
  dialect:'mysql',
  pool:{
    max:5,
    min:0,
    idle:10000
  }
});

const Todo=db.define('todo',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey:true
  },
  task:Sequelize.STRING,
  completed:Sequelize.STRING
});

db.sync({force:false}).then(()=>{
  console.log('Database is synchronised');
});

module.exports={
  Todo:Todo
}
