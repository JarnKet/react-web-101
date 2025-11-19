import { useState } from "react";
import { useNavigate } from "react-router";

const MutatePost = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userId: 1,
    title: "",
    body: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [isError, setIsError] = useState(false);

  function handleInputChange(e) {
    const { name, value } = e.target;

    setFormData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Form Data", formData);

    createPost();
  }

  async function createPost() {
    try {
      setIsSending(true);
      setIsError(false);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        setIsError(true);
        return;
      }

      navigate(-1);
    } catch (error) {
      console.error(error);
      setIsError(error);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form className="mutate-post-form" onSubmit={handleSubmit}>
      <h1 className="mutate-post-title">Create Post</h1>

      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Enter title"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="body">Body</label>
        <textarea
          name="body"
          id="body"
          placeholder="Enter content..."
          required
          value={formData.body}
          onChange={handleInputChange}
        ></textarea>
      </div>

      {isError ? (
        <small className="form-error">
          ມີບາງຢ່າງຜິດພາດ ກະລຸນາລອງໃໝ່ອີກຄັ້ງ
        </small>
      ) : null}

      <div className="form-actions">
        <button type="button" className="btn-cancel">
          Cancel
        </button>
        <button type="submit" className="btn-save" disabled={isSending}>
          {isSending ? "Saving Post" : "Save Post"}
        </button>
      </div>
    </form>
  );
};

export default MutatePost;
