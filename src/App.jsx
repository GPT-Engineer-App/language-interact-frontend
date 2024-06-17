import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { runTask } from "./services/l2macService";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await runTask({ task });
    setResult(data);
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Language Model Task Runner</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <label>
              Task:
              <Input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </label>
            <Button type="submit">Run Task</Button>
          </form>
          {result && (
            <div className="result">
              <h3>Result:</h3>
              <pre>{JSON.stringify(result, null, 2)}</pre>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
}

export default App;