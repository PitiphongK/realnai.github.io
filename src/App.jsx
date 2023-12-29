import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  console.log("APP COMPONENT EXECUTING");

  let tabContent;

  return (
    <div>
      <section id="examples">
        <menu>
          <TabButton 
            isSelected={selectedTopic === "components"}
            onSelect={() => handleSelect("components")}
          >
            HOME
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "jsx"}
            onSelect={() => handleSelect("jsx")}
          >
            ABOUT
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "props"}
            onSelect={() => handleSelect("props")}
          >
            CONTACT
          </TabButton>
        </menu>
        {tabContent}
      </section>
      <Header />
      <main >
      </main>
    </div>
  );
}

export default App;
