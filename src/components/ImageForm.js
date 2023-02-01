import { useState } from "react";

function ImageForm({ addImg }) {
  const [url, setUrl] = useState("");
  const [caption, setCap] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newImg = {
      url,
      caption,
    };

    addImg(newImg);
    setUrl("");
    setCap("");
  };

  return (
    <form onSubmit={handleSubmit} className="imageForm">
      <div className="mb-3">
        <label htmlFor="url" name="url" value={url} className="form-label">
          Image url
        </label>
        <input
          type="url"
          value={url}
          onChange={(event) => {
            setUrl(event.target.value);
          }}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="caption" className="form-label">
          Image caption
        </label>
        <input
          type="text"
          name="caption"
          value={caption}
          onChange={(event) => {
            setCap(event.target.value);
          }}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        />
      </div>
      <button type="submit">Add image</button>
    </form>
  );
}

export default ImageForm;
