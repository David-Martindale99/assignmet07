// CREATE AN ARRAY OF EMPLOYEES
let arrayEmployees = 
[
    [00111111, "John Smith", 1234, "john.smith@example.com", "Sales"],
    [00222222, "Sue Wedge", 5678, "sue.wedge@example.com", "Marketing"],
    [00333333, "Anita Johnson", 9876, "Anita.johnson@example.com", "Human Resources"],
    [00444444, "Mary Williams", 2468, "mary.williams@example.com", "Accounting"],
    [00555555, "David Lee", 1357, "david.lee@example.com", "IT"]
];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
let employees = JSON.parse(localStorage.getItem('employees'))
if (!employees) {
    employees = arrayEmployees
}

// GET DOM ELEMENTS
const form      = document.querySelector('#addForm')
const empTable  = document.querySelector('#empTable')
const empCount  = document.querySelector('#empCount')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
// Wait for the DOM to finish loading
document.addEventListener('DOMContentLoaded', () => {

    // Retrieve employee data from local storage
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
  
    // Get a reference to the table body element
    const tableBody = document.querySelector('#empTable tbody');
  
    // Loop through the employee data and create table rows for each employee
    employees.forEach(employee => {
      const row = tableBody.insertRow();
  
      // Insert cells for each employee property
      const idCell = row.insertCell();
      idCell.textContent = employee.id;
  
      const nameCell = row.insertCell();
      nameCell.textContent = employee.name;
  
      const extCell = row.insertCell();
      extCell.textContent = employee.extension;
  
      const emailCell = row.insertCell();
      emailCell.textContent = employee.email;
  
      const departmentCell = row.insertCell();
      departmentCell.textContent = employee.department;
  
      const editCell = row.insertCell();
      editCell.innerHTML = '<button>Edit</button><button>Delete</button>';
    });
  
    // Update the employee count
    const empCount = document.querySelector('#empCount');
    empCount.textContent = employees.length;
  });  

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    const empId = document.querySelector('#empId').value;
    const empName = document.querySelector('#name').value;
    const empExt = document.querySelector('#extension').value;
    const empEmail = document.querySelector('#email').value;
    const empDept = document.querySelector('#department').value;
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = [parseInt(empId.value), empName.value, parseInt(empExt.value), empEmail.value, empDept.value];

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee)

    // BUILD THE GRID
    buildGrid()
    // RESET THE FORM
    form.reset()
    // SET FOCUS BACK TO THE ID TEXT BOX
    empId.focus()
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.parentNode.parentNode.rowIndex;

            // REMOVE EMPLOYEE FROM ARRAY
            employees.splice(rowIndex - 1, 1);

            // BUILD THE GRID
            buildGrid();
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.querySelector('tbody').remove();

    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody');

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    for ([empId, empName, empExt, empEmail, empDept] of employees) {
        // REBUILDING THE ROW STRUCTURE
        let row = `
            <tr>
                <td>${empId}</td>
                <td>${empName}</td>
                <td>${empExt}</td>
                <td>${empEmail}</td>
                <td>${empDept}</td>
                <td><a href="#" class="delete">&times;</a></td>
            </tr>
        `;
        // APPEND EACH ROW TO THE TBODY
        tbody.innerHTML += row;
    }

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody);

    // UPDATE EMPLOYEE COUNT
    empCount.innerHTML = employees.length;

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees));
}
