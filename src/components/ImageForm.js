function ImageForm() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="imgSrc" className="form-label">
          Image url
        </label>
        <input
          type="src"
          className="form-control"
          id="exampleFormControlInput1"
        />
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
    </form>
  );
}

export default ImageForm;
