const employees = [
    {
      name: 'Fulan',
      email: 'fulan@dicoding.com',
      joinYear: 2020,
    },
  ];
  
  function addEmployee(name, email, joinYear) {
    /**
     * @TODO
     * lengkapi fungsi ini agar dapat menambahkan objek employee baru
     * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
     */
     const newEmployee = {
        name: name,
        email: email,
        joinYear: joinYear,
     }
     employees.push(newEmployee);
  }
addEmployee("Zahrul","Zahrul@gmail.com",2022)

console.log(employees)