import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ title: '', content: '' });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:5000/api/posts');
    setPosts(res.data);
  };

  const createPost = async () => {
    if (!form.title || !form.content) return;
    await axios.post('http://localhost:5000/api/posts', form);
    setForm({ title: '', content: '' });
    fetchPosts();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-pink-500 p-4 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-8 max-w-3xl w-full space-y-8 text-white">
        <h1 className="text-3xl font-bold text-center">📝 My Blog</h1>

        <div className="space-y-4">
          <input
            className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="Enter blog title"
            value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
          />
          <textarea
            className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="Enter blog content"
            value={form.content}
            onChange={e => setForm({ ...form, content: e.target.value })}
            rows={4}
          />
          <button
            onClick={createPost}
            className="w-full bg-white text-purple-600 font-semibold py-2 rounded-lg hover:bg-purple-200 transition-all"
          >
            ➕ Create Post
          </button>
        </div>

        <hr className="border-white/20" />

        <div className="space-y-4 max-h-[300px] overflow-y-auto">
          {posts.length === 0 ? (
            <p className="text-center text-white/70">No posts yet...</p>
          ) : (
            posts.map(post => (
              <div
                key={post.id}
                className="bg-white/20 p-4 rounded-lg shadow hover:bg-white/30 transition-all"
              >
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-white/80">{post.content}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
