import React, { useState, useContext } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    descrition: "",
    tag: "default",
  });
  const handleclick = (e) => {
    e.preventDefault();
    addNote(note.title, note.descrition, note.tag);
  };
  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descrition" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="descrition"
            name="descrition"
            onChange={onchange}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleclick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNote;
