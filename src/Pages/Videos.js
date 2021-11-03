import { useState } from "react";
import items from "../Data/Video";
import Menu from "../components/Card";
import Button from "../components/Filter";
import Header from "../components/Header";

const allCategories = ["All", ...new Set(items.map((item) => item.category))];

console.log(allCategories);

function Videos() {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  //Filter Function
  const filter = (button) => {
    if (button === "All") {
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter((item) => item.category === button);
    setMenuItem(filteredData);
  };

  return (
    <div className="App">
      <Header />
      <div className="title">
        <h1>Find your Pick</h1>
      </div>

      <Button button={buttons} filter={filter} />
      <Menu menuItem={menuItem} />
    </div>
  );
}

export default Videos;
