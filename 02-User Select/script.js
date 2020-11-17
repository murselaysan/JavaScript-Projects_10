// Get all keys or properties of users object
// Get all the values of users object
// Get the length of this object
// Find the person who has many skills in the users object.
// Count logged in users,count users having greater than equal to 50 points from the following object.
// Find people who are MERN stack developer from the users object
// Set your name in the users object without modifying the original users object
// Use the users object to print a string like:
// Asab is 25 years old. He knows "HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Meteor".




//step-1
console.log(Object.keys(users))


//step-2
console.log(Object.values(users))


//step-3
//version-1
Object.size = function(obj) {
  var size = 0, key;
  for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};
// Get the size of an object
console.log(Object.size(users));

//version-2
console.log(Object.keys(users).length)


//step-4
//version-1
function manySkills(obj){
  var many= {
    skills:[]
  };
  for (key in obj) {
    if (obj[key].skills.length > many.skills.length) {
      many = obj[key];
    };
  }
  return many;
}
console.log(manySkills(users));



//step-5
//version-1
function count50(obj){
  var counter= "";
  for (key in obj) {
    if (obj[key].points >= 50) {
      counter++;
    };
  }
  return `There are ${counter} users above 50 points`;
}
console.log(count50(users));



//step-6
//version-1
function findMERN(obj){
  let counter= 0;
  let mernUsers = [];
  for (key in obj) {
    if (obj[key].skills.includes('MongoDB' && 'Express' && 'React' && 'Node')) {
      counter++;
      mernUsers.push(key);
    };
  }
  return `There are ${counter} MERN users, and the names are; ${mernUsers}`;
}
console.log(findMERN(users));


//step-7
users.Musty = {
  email: 'musty@musty.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'SASS', 'MongoDB', 'Express', 'React', 'Node'],
  age: 40,
  isLoggedIn: true,
  points: 60
}
console.log(users)


//step-8
//version-1
for (key in users) {
users[key].name = key;
users[key].getPersonInfo = function() {
  let statement = `${this.name} is ${this.age} years old.\nHe knows ${this.skills}.`
  return statement
}
}
console.log(users.Alex.getPersonInfo())

//version-2
for (const [key] of Object.entries(users)) {
  users[key].getPersonInform = function() {
    let statement = `${key} is ${this.age} years old.\nHe knows ${this.skills}.`
    return statement
  } 
}
console.log(users.Asab.getPersonInform())