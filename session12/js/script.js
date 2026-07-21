/* let courses = ["html", "css", "js"];

let NewCourses = prompt("Enter your course name");

let index = courses.findIndex((item) => item == NewCourses);

if (index != -1) {
    alert("founded at index:  " + index);
} else {
    courses.push(NewCourses);
    console.log(courses);
} */



    // --- Bank system

var users = []

function addUser() {
    var id = prompt('enter user id')
    var name = prompt('enter user name')
    var balance = Number(prompt('enter user balance'))

    var user = {
        id: id,
        name: name,
        balance: balance
    }

    users.push(user)
    console.log(users)
}

function editUserBalanceById() {
    var id = prompt('enter user id')
    
    var index = users.findIndex((item) => item.id == id)

    if (index != -1) {
        var newBalance = Number(prompt('enter new balance'))
        users[index].balance = newBalance
        console.log(users)
    } else {
        console.log("user not found")
    }
}

function transferBalance() {
    var fromID = prompt('enter sender id')
    var toID = prompt('enter receiver id')
    var transferAmount = Number(prompt('enter balance to transfer'))

    var sender = users.find((item) => item.id == fromID)
    var receiver = users.find((item) => item.id == toID)

    if (sender && receiver) {
        if (sender.balance >= transferAmount) {
            sender.balance = sender.balance - transferAmount
            receiver.balance = receiver.balance + transferAmount
            console.log(users)
        } else {
            console.log("insufficient balance")
        }
    } else {
        console.log("user not found")
    }
}

function deleteUserById() {
    var id = prompt('enter user id to delete')

    var index = users.findIndex((item) => item.id == id)

    if (index != -1) {
        users.splice(index, 1)
        console.log("user deleted successfully")
        console.log(users)
    } else {
        console.log("user not found")
    }
}

addUser()
addUser()
addUser()