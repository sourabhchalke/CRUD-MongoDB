mydatabase> db.employee.findOne({})//finds only one document which is first
{
  _id: ObjectId('66c760be402e7769fd2710bc'),
  id: 1,
  name: 'Virat',
  address: 'Delhi',
  email: 'virat18@gmail.com'
}

mydatabase> db.employee.find({})//finds all documents available in employee
[
  {
    _id: ObjectId('66c760be402e7769fd2710bc'),
    id: 1,
    name: 'Virat',
    address: 'Delhi',
    email: 'virat18@gmail.com'
  },
  {
    _id: ObjectId('66c7663d402e7769fd2710bd'),
    id: '2',
    name: 'Tendulkar',
    address: 'Mumbai',
    email: 'scahin10@gmail.com'
  },
  {
    _id: ObjectId('66c7663d402e7769fd2710be'),
    id: 3,
    name: 'Dhoni',
    address: 'Ranchi',
    email: 'dhoni07@gmail.com'
  },
  { _id: ObjectId('66c7663d402e7769fd2710bf'), address: 'Mumbai' },
  {
    _id: ObjectId('66c7663d402e7769fd2710c0'),
    id: 5,
    name: 'Rohit',
    address: 'Nagpur',
    email: 'rohit45@gmail.com'
  }
]


mydatabase> db.employee.find({address:"Mumbai"})//finds all documents whose address is Mumbai
[
  {
    _id: ObjectId('66c7663d402e7769fd2710bd'),
    id: '2',
    name: 'Tendulkar',
    address: 'Mumbai',
    email: 'scahin10@gmail.com'
  },
  { _id: ObjectId('66c7663d402e7769fd2710bf'), address: 'Mumbai' }
]

mydatabase> db.employee.findOne({address:"Mumbai"})//finds only first document whose address is Mumbai