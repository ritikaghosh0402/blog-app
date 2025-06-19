import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BlogCardEditable from '../components/BlogCardEditable';

const BlogManager = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:5000/api/posts');
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const deletePost = async (id) => {
    await axios.delete(`http://localhost:5000/api/posts/${id}`);
    fetchPosts();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold flex items-center gap-2">
          🛠 Manage Blogs
        </h1>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition"
        >
          ⬅ Back to Create Blog
        </Link>
      </div>

      {posts.length === 0 ? (
        <p className="text-center text-white/70 mt-12 text-lg">No blogs found. Start by creating one!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCardEditable
              key={post.id}
              blog={post}
              onDelete={() => deletePost(post.id)}
              onRefresh={fetchPosts}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogManager;
