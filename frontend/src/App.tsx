import { useState } from "react";
import { ToggleButtons } from "./components";
import { Content } from "./features";
import { Search } from "./features/search";

function App() {
  const TOGGLE_BUTTONS_DATA = ["Trending", "Search"];
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <ToggleButtons
        data={TOGGLE_BUTTONS_DATA}
        selectedIndex={selectedIndex}
        onSelectedIndexChange={setSelectedIndex}
      />
      {[<Content />, <Search />][selectedIndex]}
    </div>
  );
}

export default App;
