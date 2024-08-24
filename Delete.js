db.employee.remove({id:4})//Delete document where id is 4 
mydatabase> db.employee.find({})
[
  {
    _id: ObjectId('66c9f0ffd2454cd3b32710bc'),
    id: 1,
    name: 'Virat',
    address: 'Delhi',
    email: 'virat18@gmail.com'
  },
  {
    _id: ObjectId('66c9f23ad2454cd3b32710bd'),
    id: 2,
    name: 'Sachin',
    address: 'Mumbai',
    email: 'sachin10@gmail.com'
  },
  {
    _id: ObjectId('66c9f23ad2454cd3b32710be'),
    id: 3,
    name: 'Dhoni',
    address: 'Ranchi',
    email: 'dhoni07@gmail.com'
  },
  {
    _id: ObjectId('66c9f23ad2454cd3b32710bf'),
    id: 4,
    name: 'Rohit',
    address: 'Nagpur',
    email: 'rohit45@gmail.com'
  }

]