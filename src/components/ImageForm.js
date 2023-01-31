import { useState } from "react";

function ImageForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="imageForm">
      <div className="mb-3">
        <label htmlFor="imgSrc" className="form-label">
          Image url
        </label>
        <input type="src" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="imgCaption" className="form-label">
          Image caption
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button type="submit">Add image</button>
    </form>
  );
}

export default ImageForm;
