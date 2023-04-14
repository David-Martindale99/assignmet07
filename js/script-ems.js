employees = [
    {id: 1, name: "John Smith", extension: 1234, email: "john.smith@company.com", department: "Sales"},
    {id: 2, name: "Jane Doe", extension: 5678, email: "jane.doe@company.com", department: "Marketing"},
    {id: 3, name: "Bob Johnson", extension: 9012, email: "bob.johnson@company.com", department: "IT"},
    {id: 4, name: "Samantha Lee", extension: 3456, email: "samantha.lee@company.com", department: "HR"},
    {id: 5, name: "Tom Davis", extension: 7890, email: "tom.davis@company.com", department: "Finance"}
  ];
  
  // Build the grid
  function buildGrid() {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = ""; // Clear the existing rows
  
    // Loop through the employees and construct the rows
    for (const employee of employees) {
      const row = `
        <tr>
          <td>${employee.id}</td>
          <td>${employee.name}</td>
          <td>${employee.extension}</td>
          <td>${employee.email}</td>
          <td>${employee.department}</td>
          <td><button onclick="removeEmployee(${employee.id})">Remove</button></td>
        </tr>
      `;
      tbody.appendChild(document.createRange().createContextualFragment(row));
    }
  }
  
  // Add a new employee
  function addEmployee(name, extension, email, department) {
    const id = employees.length + 1;
    const newEmployee = {id, name, extension, email, department};
    employees.push(newEmployee);
    buildGrid();
    storeData();
  }
  
  // Remove an employee by ID
  function removeEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    buildGrid();
    storeData();
  }
  
  // Store the employee data in localStorage
  function storeData() {
    localStorage.setItem("employees", JSON.stringify(employees));
  }
  
  // Load the employee data from localStorage, if it exists
  function loadData() {
    const data = localStorage.getItem("employees");
    if (data) {
      employees = JSON.parse(data);
    }
  }
  
  // Call the necessary functions when the page loads
  window.onload = function() {
    loadData();
    buildGrid();
  }