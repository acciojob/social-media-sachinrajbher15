import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { usePosts } from '../redux/PostContext';

const EditPost = () => {
  const { id } = useParams();
  const { posts, setPosts, addNotification } = usePosts();
  const post = posts.find((p) => p.id === parseInt(id));
  const history = useHistory();

  const [editedPost, setEditedPost] = useState(post);

  const handleEdit = () => {
    const updatedPosts = posts.map((p) => (p.id === editedPost.id ? editedPost : p));
    setPosts(updatedPosts);

    // Add notification
    addNotification(`Post "${editedPost.title}" was edited by ${editedPost.author}`);

    history.push('/user-posts'); // Redirect back to posts
  };

  if (!post) return <p>Post not found</p>;

  return (
    <div className="edit-post-container">
      <h1>Edit Post</h1>
      <input
        type="text"
        value={editedPost.title}
        onChange={(e) => setEditedPost({ ...editedPost, title: e.target.value })}
      />
      <textarea
        value={editedPost.content}
        onChange={(e) => setEditedPost({ ...editedPost, content: e.target.value })}
      ></textarea>
      <button onClick={handleEdit}>Save Changes</button>
    </div>
  );
};

export default EditPost;
