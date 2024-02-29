import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const s1 = {
    name: "yash",
    class: "10th",
  };
  const [name, setName] = useState(s1);
  const update = () => {
    setTimeout(() => {
      setName({ name: "Akash", class: "12th" });
    }, 3000);
  };
  return (
    <NoteContext.Provider value={{ name, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
