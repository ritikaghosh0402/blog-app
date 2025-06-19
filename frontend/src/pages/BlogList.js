import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom';

function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-pink-500 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex justify-between items-center text-white">
          <h1 className="text-4xl font-bold">📚 All Blogs</h1>
          <Link to="/" className="underline text-white/80 hover:text-white">
            ← Back to Create
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts.map(post => (
            <BlogCard key={post.id} title={post.title} content={post.content} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogList;
