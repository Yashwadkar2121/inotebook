import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitail = [
    {
      _id: "65dfcd042a89dcaaab225dfe8",
      user: "65dfca12905a81244f4453e6",
      title: "my Title",
      description: "My First note",
      tag: "General",
      date: "2024-02-29T00:17:08.986Z",
      __v: 0,
    },
    {
      _id: "65dfcad05289dcaaab225dfea",
      user: "65dfca12905a81244f4453e6",
      title: "my Title",
      description: "My First note",
      tag: "General",
      date: "2024-02-29T00:17:09.431Z",
      __v: 0,
    },
    {
      _id: "65dfcd0428a9dcaaab225dfe8",
      user: "65dfca12905a81244f4453e6",
      title: "my Title",
      description: "My First note",
      tag: "General",
      date: "2024-02-29T00:17:08.986Z",
      __v: 0,
    },
    {
      _id: "65dfcda05289dcaadab225dfea",
      user: "65dfca12905a81244f4453e6",
      title: "my Title",
      description: "My First note",
      tag: "General",
      date: "2024-02-29T00:17:09.431Z",
      __v: 0,
    },
    {
      _id: "65dfcd04289dcaaadb225dfe8",
      user: "65dfca12905a81244f4453e6",
      title: "my Title",
      description: "My First note",
      tag: "General",
      date: "2024-02-29T00:17:08.986Z",
      __v: 0,
    },
    {
      _id: "65dfcad05289dcaaaab225dfea",
      user: "65dfca12905a81244f4453e6",
      title: "my Title",
      description: "My First note",
      tag: "General",
      date: "2024-02-29T00:17:09.431Z",
      __v: 0,
    },
    {
      _id: "65dfcd04289dcaaaab225dfe8",
      user: "65dfca12905a81244f4453e6",
      title: "my Title",
      description: "My First note",
      tag: "General",
      date: "2024-02-29T00:17:08.986Z",
      __v: 0,
    },
    {
      _id: "65dfcd05a289dcaaab225dfea",
      user: "65dfca12905a81244f4453e6",
      title: "my Title",
      description: "My First note",
      tag: "General",
      date: "2024-02-29T00:17:09.431Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitail);

  // Add A Note
  const addNote = (title, description, tag) => {
    // TODO : API Call
    const note = {
      _id: "65dfcd05a289dcaaaaab225dfea",
      user: "65dfca12905a81244f4453e6",
      title: title,
      description: description,
      tag: tag,
      date: "2024-02-29T00:17:09.431Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  // Delete a Note
  // TODO : API Call
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  // Update a Note
  const updateeNote = (id) => {};
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, updateeNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
