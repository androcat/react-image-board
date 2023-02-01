function ImageList({ imgs }) {
  const imgsHTML = imgs.map((img, index) => (
    <li key={index}>
      <div className="card">
        <img src={img.url} alt={img.caption} />
        <p>{img.caption}</p>
      </div>
    </li>
  ));
  return <ul className="imageList">{imgsHTML}</ul>;
}

export default ImageList;
