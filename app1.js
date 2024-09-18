let out = document.getElementById('out')

let text = document.getElementById('para');

let name = localStorage.getItem('userName');

text.innerText = `Hey 👋  ${name}  Welcome to Our Student Portal  `;


out.onclick = function(){

    window.location.href ='index.html' ;

    window.history.forward()
}



let sNO = 1;
let myTable = document.getElementById('myTable');
let btn = document.getElementById('btn');


window.onload = function () {
    let storedStudents = JSON.parse(localStorage.getItem('students'));
    if (storedStudents) {
        storedStudents.forEach(student => addStudentRow(student));
    }
};

btn.onclick = function () {
    let userName = document.getElementById('name').value;
    let CNIC = document.getElementById('CNIC').value;
    let userEmail = document.getElementById('email').value;
    let userNumb = document.getElementById('numb').value;
    let rolRandom = Math.round(Math.random() * (999999 - 100000 + 1) + 100000);

    let student = {
        sNO: sNO++,
        name: userName,
        CNIC: userCNIC,
        email: userEmail,
        number: userNumb,
        rollNumber: rolRandom
    };

    addStudentRow(student);

   
    let students = JSON.parse(localStorage.getItem('students')) || [];
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));

   
    document.getElementById('name').value = '';
    document.getElementById('CNIC').value = '';
    document.getElementById('email').value = '';
    document.getElementById('numb').value = '';
};

function addStudentRow(student) {
    let newRow = myTable.insertRow();
    let cell1 = newRow.insertCell();
    let cell2 = newRow.insertCell();
    let cell3 = newRow.insertCell();
    let cell4 = newRow.insertCell();
    let cell5 = newRow.insertCell();
    let cell6 = newRow.insertCell();
    let cell7 = newRow.insertCell();
    let cell8 = newRow.insertCell();

    cell1.textContent = student.sNO;
    cell2.textContent = student.name;
    cell3.textContent = student.userCNIC;
    cell4.textContent = student.email;
    cell5.textContent = student.number;
    cell6.textContent = student.rollNumber;
    cell7.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';
    cell8.innerHTML = '<button onclick="editRow(this)">Edit</button>';
}

function deleteRow(button) {
    let row = button.closest('tr');
    let index = row.rowIndex - 1;
    row.remove();

    // Remove student from local storage
    let students = JSON.parse(localStorage.getItem('students')) || [];
    students.splice(index, 1);
    localStorage.setItem('students', JSON.stringify(students));
}

function editRow(button) {
    let row = button.closest('tr');
    let cells = row.cells;
    let index = row.rowIndex - 1;

    let currentName = cells[1].textContent;
    let currentFatherName = cells[2].textContent;
    let currentEmail = cells[3].textContent;
    let currentNumber = cells[4].textContent;

    let newName = prompt("Enter new Name:", currentName);
    if (newName !== null) {
        cells[1].textContent = newName;
    }

    let newCNIC = prompt("Enter new CNIC:", currentCNIC);
    if (newFatherName !== null) {
        cells[2].textContent = newFatherName;
    }

    let newEmail = prompt("Enter new Email:", currentEmail);
    if (newEmail !== null) {
        cells[3].textContent = newEmail;
    }

    let newNumber = prompt("Enter new Number:", currentNumber);
    if (newNumber !== null) {
        cells[4].textContent = newNumber;
    }

   
    let students = JSON.parse(localStorage.getItem('students')) || [];
    students[index].name = cells[1].textContent;
    students[index].CNIC = cells[2].textContent;
    students[index].email = cells[3].textContent;
    students[index].number = cells[4].textContent;
    localStorage.setItem('students', JSON.stringify(students));
}