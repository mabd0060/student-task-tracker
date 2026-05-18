import { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import { supabase } from "./services/supabase";

function App() {
  // ✅ State FIRST
  const [tasks, setTasks] = useState([]);

  // ✅ Fetch from Supabase on load
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching tasks:", error);
      return;
    }

    if (data) {
      setTasks(data);
    }
  };


  // ✅ Add task (still local for now)
  const addTask = async (task) => {
    const { data, error } = await supabase
      .from("tasks")
      .insert([{ text: task, completed: false }])
      .select();

    if (error) {
      console.error("Error adding task:", error);
      return;
    }

    setTasks([data[0], ...tasks]);
  };

  const toggleComplete = async (task) => {
    const { error } = await supabase
      .from("tasks")
      .update({ completed: !task.completed })
      .eq("id", task.id);

    if (error) {
      console.error("Error updating task:", error);
      return;
    }

    fetchTasks();
  };

  const deleteTask = async (id) => {
    const { error } = await supabase
      .from("tasks")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting task:", error);
      return;
    }

    fetchTasks();
  };

  return (
    <div>
      <h1>Task Tracker</h1>
      <TaskInput onAddTask={addTask} />

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>

            <button onClick={() => toggleComplete(task)}>
              {task.completed ? "Undo" : "Complete"}
            </button>

            <button onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;