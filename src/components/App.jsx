import React from "react";
import Entry from "./Entry";
import emojipeadia from "../emojipedia";

function createDictionary(i) {
  return <Entry key={i.id} emoji={i.emoji} name={i.name} meaning={i.meaning} />;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipeadia.map(createDictionary)}</dl>
    </div>
  );
}

export default App;
