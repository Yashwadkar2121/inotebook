import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  const date = new Date(note.date);
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h4 className="card-title">
              {note.title}
              <i
                className="far fa-trash-alt mx-2"
                onClick={() => {
                  deleteNote(note._id);
                  props.showAlert("Deleting Note is Succesfully", "success");
                }}
              ></i>
              <i
                className="far fa-edit mx-2"
                onClick={() => {
                  updateNote(note);
                }}
              ></i>
            </h4>
          </div>
          <h5 className="card-text">{note.tag}</h5>
          <p className="card-text">{note.description}</p>
          <p className="card-text">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
