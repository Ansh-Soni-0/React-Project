import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { CiSaveDown2 } from "react-icons/ci";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  
  // Load todos from localStorage on page load
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    // Check if the storedTodos is valid and not undefined or null
    if (storedTodos) {
        const parsedTodos = JSON.parse(storedTodos);
        // Ensure parsedTodos is an array (or an empty array as fallback)
        if (Array.isArray(parsedTodos)) {
          setTodos(parsedTodos);
        } else {
          console.error("Stored todos are not an array.");
        }
    }
  }, []);

  // Save todos to localStorage every time they change
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);
  

  const handleAdd = () => {

    if (todo) {

      setTodos([...todos, { text: todo, id: Date.now(), isChecked:false }]);
      setTodo("");

    } else {
      alert("Please ! Add Some Task");
    }

  };

  const handleEdit = (id) => {
    //find edited text from todos
    const editedtext = todos.find((todo) => todo.id === id);
    //set edited text in input field
    setTodo(editedtext.text);
    //now filter all todo from list which is not match the id
    const filteredList = todos.filter((todo) => todo.id !== id);
    //and set all filtered list in our array
    setTodos(filteredList);
    
  };

  const handleDelete = (id) => {
    //filter all the items which is not match that perticular item id
    const filteredList = todos.filter((todo) => todo.id !== id);
    //and set all filterd item into the array todolist
    setTodos(filteredList);

  };

  const handleCheckboxChange = (id) => {

    setTodos((prevTask) => prevTask.map((todo) =>
       todo.id === id ? {...todo , isChecked: !todo.isChecked} : todo
    )
    
  )

  };

  return (
    <>

    <div className="container">
      <div className="todo-container">
        <h2>Add a ToDo</h2>

        <div className="input-container">
          <input
            type="text"
            className="input-field"
            placeholder="Write Something"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />

          <Button onClick={handleAdd}
          icon={<CiSaveDown2 />}
          // text="Save"
           />
        </div>

        <div className="list-container">
          <h3>Your Todos</h3>

          <div className="list">
            {todos.length > 0
              ? todos.map((todo) => (

                  <div key={todo.id} className="todo-list-container">
                    <div className="todo-list">
                      <input

                      className={todo.isChecked ? "lignThrougn" : ""}
                      type="checkbox" 
                      checked={todo.isChecked}
                      onChange={() => handleCheckboxChange(todo.id)}

                      />

                      <div id="todo-text"
                      className={todo.isChecked ? "lignThrougn": ""}
                      >
                        {todo.text}
                      </div>
                      
                    </div>

                    <div className="btn">
                      <Button onClick={() => handleEdit(todo.id)}
                      //  text="Edit" 
                      icon={<CiEdit />}
                        />
                      <Button
                        onClick={() => handleDelete(todo.id)}
                        // text="del"
                        icon={<MdDelete />}
                      />
                    </div>
                  </div>

                ))
              :(
                <div className="message">No todos yet. Add some!</div>
              )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
