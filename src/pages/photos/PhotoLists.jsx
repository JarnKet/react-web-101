import { useEffect, useState } from "react";

const PhotoLists = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=30")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch photos");
        return res.json();
      })
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  function handleImageClick(url) {
    window.open(url, "_blank");
  }

  return (
    <div className="photo-list-page">
      <h1 className="photo-list-title">Photo List</h1>
      {loading && <p>Loading photos...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && (
        <div className="photo-grid">
          {photos.map((photo) => (
            <div className="photo-item" key={photo.id}>
              <img
                src={photo.thumbnailUrl}
                alt={photo.title}
                className="photo-img"
                onClick={() => handleImageClick(photo.url)}
                title={photo.title}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoLists;
