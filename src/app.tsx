import { useState } from "react";
import { cn } from "./util";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className={cn("h-scree")}>
      <button
        data-testid="count"
        onClick={() => setCount((count) => count + 1)}
      >
        count:{count}
      </button>
    </div>
  );
}

export default App;
