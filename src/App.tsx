import { useState } from "react";
import "./App.css";
import { Button, NextUIProvider } from "@nextui-org/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <NextUIProvider>
      <Button>Click me</Button>;
    </NextUIProvider>
  );
}

export default App;
