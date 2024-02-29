import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";

const About = () => {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      This is about {a.name.name} and he is in class {a.name.class}
    </div>
  );
};

export default About;
