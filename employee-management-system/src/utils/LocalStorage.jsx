
const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Description 1",
        "date": "2025-02-06",
        "category": "Work",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task 2",
        "description": "Description 2",
        "date": "2025-02-07",
        "category": "Meeting",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 }
  },
  {
    "id": 2,
    "firstName": "Vihaan",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Task 3",
        "description": "Description 3",
        "date": "2025-02-08",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task 4",
        "description": "Description 4",
        "date": "2025-02-09",
        "category": "Testing",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": { "active": 2, "newTask": 2, "completed": 0, "failed": 0 }
  },
  {
    "id": 3,
    "firstName": "Kabir",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Task 5",
        "description": "Description 5",
        "date": "2025-02-10",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task 6",
        "description": "Description 6",
        "date": "2025-02-11",
        "category": "Documentation",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": { "active": 1, "newTask": 2, "completed": 0, "failed": 2 }
  },
  {
    "id": 4,
    "firstName": "Ishaan",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Task 7",
        "description": "Description 7",
        "date": "2025-02-12",
        "category": "Review",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task 8",
        "description": "Description 8",
        "date": "2025-02-13",
        "category": "Research",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": { "active": 1, "newTask": 1, "completed": 0, "failed": 0 }
  },
  {
    "id": 5,
    "firstName": "Aryan",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Task 9",
        "description": "Description 9",
        "date": "2025-02-14",
        "category": "Analysis",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task 10",
        "description": "Description 10",
        "date": "2025-02-15",
        "category": "Presentation",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": { "active": 1, "newTask": 3, "completed": 2, "failed": 0 }
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];


export const setLocalStorage = () => {
    localStorage.setItem('employees' ,JSON.stringify(employees))
    localStorage.setItem('admin' ,JSON.stringify(admin))
}


export const getLocalStorage = () => {
    // const employees = localStorage.getItem('employees');

    // const employeesData = JSON.parse(employees)
    // console.log(employeesData)

    // rather the upper two line write directly like this 

    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    // console.log(employees);
    // console.log(admin);

    return {employees , admin};

}