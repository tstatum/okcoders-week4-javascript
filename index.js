var user1 = {
    firstname: 'Bob',
    lastname: 'Rockers',
    age: 42
}


var user2 = {
    firstname: 'Zack',
    lastname: 'Mayes',
    age: 12
}
var weddingList = [
    'old',
    'new',
    'borowed',
    'blue'
]

var userlist = [
    user1,
    user2
]

var address1 = {
    firstname: 'Bob',
    lastname: 'Rockers',
    address: '1234 Cherryhill Road',
    city:'Pearl',
    state: 'Maine'
}
var address2 = {
    firstname: 'Zack',
    lastname: 'Mayes',
    address:'5678 Windmill Lane',
    city:'Java',
    state:'Hawaii'
}
var address3 = {
    firstname: 'Trinity',
    lastname: 'Statum',
    address: '676902 Jupiter Circle',
    city: 'Isle of Ice',
    country: 'Jupiter',
    
}
var address4 = {
    firstname: 'David',
    lastname: 'Bowie',
    address: ' 676902 Mars Way',
    city: 'Chaos Plains',
    planet: 'Mars'
}
var addressbook= [
    address1,
    address2,
    address3,
    address4
]

// function printFirstnames(add){
//     for(var i=0; i<add.length;i++){
//         console.log(add[i].firstname)
//     }
// }

// // printFirstnames(addressbook);



// function printAddress(add){
//     for (var i=0; i<add.length;i++){
//         console.log(add[i].address)
//     }
// }

// printAddress(addressbook);

var ourFunction = function(thing){
    for(var i =0; i<thing.length;i++){
        console.log(thing[i].lastname);
    }
}

function ourConsole(message1){
    return function(message2){
        console.log("This is out message" +message1);
        console.log("This is our message2 out: " +message2);
    }
}
var mgs = ourConsole("Hello");
// mgs("Goodbye");

// for(var i=0; i<addressbook.length; i++){
//     mgs(addressbook);
// }

// function forEach(arr1, func1){
//     for(var i=0; i<arr1.length; i++){
//     func1(arr1[i]);
//     }
// }
// forEach(addressbook,printName);

// function printName(x){
//     console.log(x.firstname, x.lastname);
// }



function printAddr(x){
    console.log(x.address);

}

// function printContact(add){
//     for(var i=0; i<add.length; i++){
//         console.log("===");
//         console.log(address1,address2,address3,address4);
//     }

// }
// var printContact2 = function(contact){
//     console.log("===");
//     console.log(contact.address1, contact.address3, contact.address3, contact.address4);
//     console.log()
// }

// forEach(addressbook,printName);
// forEach(addressbook,printAddr);

// printFirstnames(addressbook);

// ourFunction(addressbook);

var printhello = function(){
    console.log("Hello Everyone !!!")
}

setTimeout(function(){
    console.log("Hello Everyone!!!")
},5000);