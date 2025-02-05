import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/button";
import Screen from "./components/Screen";

function App() {
  const [firstInput, setFirstInput] = useState<string>(""); //Stores the text entered in the input field. useState<string> makes sure that first inout always holds a string
  const [tasks, setTasks] = useState<string[]>([]); //Stores a list of tasks, an array of strings.

  // Add Task Function
  const addTask = (task: string) => { //checks if input is not empty
    if (task.trim() !== "") {
      setTasks([...tasks, task]); //i used to create a new array with the new task added at the end.
      setFirstInput(""); // Clear input field after adding
    }
  };

  // Remove Last Task Function
  const removeTask = () => {
    setTasks((prevTasks) => prevTasks.slice(0, -1)); //slice removes the last element from the tasks array. The Updates the state with the new list after removing the last task.
  };

  // Edit First Task Function (as an example)
  const editTask = () => {
    if (tasks.length > 0) { //runs if there is at least one task.
      const updatedTasks = [...tasks]; // Creates a copy of the tasks array.
      updatedTasks[0] = firstInput; // Replace first task with input value
      setTasks(updatedTasks); //updates the list
    }
  };

  return (
    <div className="app">
      <h1>My Tasks</h1>

      <Input
        value={firstInput} // Uses the Input component to accept user input.
        onChange={(value) => setFirstInput(value)} // Binds first input to input field and updates input
        placeholder="Add or Edit Task"
      />

      <div className="Button">
        <Button onClick={() => addTask(firstInput)} label="Add Task" />
      </div>

      <div className="Button-Remove">
        <Button onClick={removeTask} label="Remove Last Task" />
      </div>

      <div className="Button-Edit">
        <Button onClick={editTask} label="Edit First Task" />
      </div>

      <div className="todo-item">
        <Screen tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
