import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [form, setForm] = useState({ title: '', content: '' });
  const [image, setImage] = useState(null);

  const createPost = async () => {
    const data = new FormData();
    data.append('title', form.title);
    data.append('content', form.content);
    if (image) data.append('image', image);
    await axios.post('http://localhost:5000/api/posts', data);
    setForm({ title: '', content: '' });
    setImage(null);
    alert('Blog created');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex justify-center items-center p-6">
      <div className="bg-white/10 p-8 rounded-xl shadow-xl backdrop-blur-lg w-full max-w-lg text-white space-y-6">
        <h1 className="text-3xl font-bold">Create Blog</h1>
        <input
          className="w-full p-3 bg-white/20 rounded"
          placeholder="Title"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          className="w-full p-3 bg-white/20 rounded"
          placeholder="Content"
          rows={4}
          value={form.content}
          onChange={e => setForm({ ...form, content: e.target.value })}
        />
        <input
          type="file"
          onChange={e => setImage(e.target.files[0])}
          className="text-white"
        />
        <button onClick={createPost} className="bg-white text-blue-600 w-full py-2 rounded hover:bg-blue-200">
          Post Blog
        </button>
        <Link to="/manage" className="block text-center text-white/80 underline">🛠 Manage Blogs</Link>
      </div>
    </div>
  );
};

export default Home;
