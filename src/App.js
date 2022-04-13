import React from "react";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data]);

  return (
    <div className="App">
      <Header logo="start from the middle" />
    </div>
  );
}

export default App;
