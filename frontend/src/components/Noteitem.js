import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3 my-3">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">
            {note.title}
            <i
              className="fa-solid fa-file-pen mx-2"
              onClick={() => {
                updateNote(note._id);
              }}
            ></i>
            <i
              className="fa-solid fa-trash-can mx-2"
              onClick={() => {
                deleteNote(note._id);
              }}
            ></i>
          </h4>
          <h5>{note.tag}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {note.date}
          </h6>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
