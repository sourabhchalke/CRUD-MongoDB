db.employee.updateOne({id:4},{$set:{address:"Mumbai"}})
//this will update address where id is 4

db.employee.updateMany({address:"Mumbai"},{$set:{name:"Tendulkar"}})
//this will update name of all those whose address is Mumbai
//update multiple documents

mydatabase> db.employee.replaceOne({id:4},{name:"Gavaskar",address:"Ratnagiri",email:"gavaskar01@gmail.con"})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}
mydatabase> db.employee.replaceOne({name:"Gavaskar"},{address:"Ratnagiri",email:"gavaskar01@gmail.con"})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
mydatabase> db.employee.replaceOne({name:"Gavaskar"},{name:"Gavaskar",address:"Ratnagiri",email:"gavaskar01@gmail.con"})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}
mydatabase> db.employee.replaceOne({address:"Ratnagiri"},{address:"Mumbai"})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}