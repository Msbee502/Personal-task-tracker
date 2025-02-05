import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Screen from "./components/Screen";
import "./App.css";

function App() {
  const [firstInput, setFirstInput] = useState<string>(""); //Stores the text entered in the input field. useState<string> makes sure that first input always holds a string
  const [tasks, setTasks] = useState<string[]>([]); //Stores a list of tasks, an array of strings.

  // Add Task Function
  const addTask = (task: string) => {
    //checks if input is not empty
    if (task.trim() !== "") {
      setTasks([...tasks, task]); //is used to create a new array with the new task added at the end.
      setFirstInput(""); // Clear input field after adding
    }
  };

  // Remove Last Task Function
  const removeTask = () => {
    setTasks((prevTasks) => prevTasks.slice(0, -1)); //slice removes the last element from the tasks array. The Updates the state with the new list after removing the last task.
  };

  // Edit Task Function
  const editTask = () => {
    if (tasks.length > 0) { //runs if there is at least one task.
      const updatedTasks = [...tasks]; // Copies the tasks array.
      updatedTasks[0] = firstInput; // Replaces first task with input value
      setTasks(updatedTasks); //updates the list
    }
  };

  return (
    <div className="ParentContainer app min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
    <div className="" >
      <h1 className="text-3xl font-bold mb-6 text-blue-600">My Tasks</h1>

      <Input
        value={firstInput} // Uses the Input component to accept user input.
        onChange={(value) => setFirstInput(value)} // Binds first input to input field and updates input
        placeholder="Add or Edit Task"
        className="border-gray-200"
      />

      <div className="Button flex space-x-4 mb-6">
        <Button 
          onClick={() => addTask(firstInput)} 
          label="Add Task"
          
        />
      </div>

      <div className="Button-Remove">
        <Button onClick={removeTask} label="Remove Last Task"
         />
      </div>

      <div className="Button-Edit">
        <Button onClick={editTask} label="Edit First Task" />
      </div>

      <div className="todo-item">
        <Screen tasks={tasks} />
      </div>
    </div>
    </div>
  );
}

export default App;
