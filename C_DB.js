// In MongoDB you can create collection manually by 'db.createCollection()' but not the database.


use myDatabase;//It uses this database if exist ,if not then it will first create database automatically and then it uses database;
//switch to db myDatabase

show databases; //it will not show database , until you insert at least one document

db.employee.insert({id:1,name:"Virat",email:"virat18@gmail.com",address:"Delhi"})//after inserting this it will show database 
//And also it will create collection automatically after inserting data.

show collections //this will show all connections contain within this particular database
