import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/button";
import Screen from "./components/Screen";

function App() {
  const [firstInput, setFirstInput] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTasks = (task: string) => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setFirstInput(""); // Clear input field after adding
    }
  };

  return (
    <div className="app">
      <h1>My Tasks</h1>

      <Input
        value={firstInput}
        onChange={(value) => setFirstInput(value)}
        placeholder="Add Task"
      />

      <div className="Button">
        <Button onClick={() => addTasks(firstInput)} />
      </div>
      <div className="Button-edit">
      <Button onClick={() => editTasks(firstInput)} />
      </div>

      <div className="todo-item">
        <Screen tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
