import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitail = [
    {
      _id: "65dfcd04289dcaaab225dfe8",
      user: "65dfca12905a81244f4453e6",
      title: "my Title",
      description: "My First note",
      tag: "General",
      date: "2024-02-29T00:17:08.986Z",
      __v: 0,
    },
    {
      _id: "65dfcd05289dcaaab225dfea",
      user: "65dfca12905a81244f4453e6",
      title: "my Title",
      description: "My First note",
      tag: "General",
      date: "2024-02-29T00:17:09.431Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitail);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
