// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Feed = () => {

//   const [posts, setPosts] = useState([
//     {
//       _id: "1",
//       image: "https://ik.imagekit.io/rjnrgxvmj/image_P_c_VPURS.jpg",
//       caption: "Beautiful scenery",
//     }
//   ]);

//   useEffect(() => {
//     axios.get("")
//       .then((res) => {
//         setPosts(res.data.posts);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <section className="feed-section">

//       {posts.length > 0 ? (
//         posts.map((post) => (
//           <div key={post._id} className="post-card">
//             <img src={post.image} alt={post.caption} />
//             <p>{post.caption}</p>
//           </div>
//         ))
//       ) : (
//         <h1>No posts available</h1>
//       )}

//     </section>
//   );
// };

// export default Feed;
import React, { useState, useEffect } from "react";
import axios from "axios";

const Feed = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:3000/posts")
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  return (
    <section className="feed-section">
      <h1 className="feed-header">Your Feed</h1>

      <div className="feed-container">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className="post-card">
              <div className="post-header">
                <div className="avatar-placeholder">U</div>
                <span className="username">User</span>
              </div>
              <div className="post-image-container">
                <img
                  src={post.image}
                  alt={post.caption}
                />
              </div>
              <p className="post-caption">
                <strong>User</strong> {post.caption}
              </p>
            </div>
          ))
        ) : (
          <div className="no-posts">
            <h2>No posts to show yet!</h2>
            <p>Be the first to share something amazing.</p>
          </div>
        )}
      </div>

    </section>
  );
};

export default Feed;