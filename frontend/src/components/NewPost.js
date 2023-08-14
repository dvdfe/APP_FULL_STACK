import React from "react";

const Newpost = () => {
  return (
    <form className="new-post-container">
      <textarea placeholder="Quoi de neuf ?"></textarea>
      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default Newpost;
