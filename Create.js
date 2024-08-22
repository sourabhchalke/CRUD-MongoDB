db.employee.insertOne({id:1,name:"Virat",email:"virat18@gmail.com",address:"Delhi"})
//inserting single data

db.employee.insert([
    
    {id:2,name:"Sachin",email:"sachin10@gmail.com",address:"Mumbai"},
    {id:3,name:"Dhoni",email:"dhoni07@gmail.com",address:"Ranchi"},
    {id:4,name:"Rohit",email:"rohi45@gmail.com",address:"Nashik"},
    {id:5,name:"Gavaskar",email:"gavaskar01@gmail.com",address:"Ratnagiri"},
    {id:6,name:"Dravid",email:"dravid17@gmail.com",address:"Keral"}

])
//inserting multiple data at one time