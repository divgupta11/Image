import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return; // Prevent double submission
    setLoading(true);

    const formData = new FormData(e.target);

    try {

      const res = await axios.post(
        "http://localhost:3000/create-post",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(res.data);

      navigate("/feed");

    } catch (err) {
      console.log(err);
      alert("Error creating post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="create-post-section">
      <h1 className="create-post-header">Create New Post</h1>

      <form className="create-post-form" onSubmit={handleSubmit}>

        <label className="file-input-wrapper">
          <div className="file-input-icon">📷</div>
          <span className="file-input-text">Click or drag image to upload</span>
          <input
            type="file"
            name="image"
            accept="image/*"
            required
            onChange={(e) => {
              if (e.target.files.length > 0) {
                e.target.previousSibling.innerText = e.target.files[0].name;
              }
            }}
          />
        </label>

        <textarea
          name="caption"
          placeholder="Write a captivating caption..."
          required
          rows="3"
        />

        <button type="submit" className="submit-btn" disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
          <span>{loading ? "Posting..." : "Post Image"}</span>
          <span>{loading ? "⏳" : "🚀"}</span>
        </button>

      </form>
    </section>
  );
};

export default CreatePost;