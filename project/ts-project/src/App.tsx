import { useState } from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
  const [count, setCount] = useState<number>(1);
  return (
    <>
      <Header count={count} />
      <HomePage setCount={setCount} />
    </>
  );
}

export default App;
