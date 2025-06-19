import React, { useState } from 'react';
import axios from 'axios';

const BlogCardEditable = ({ blog, onDelete, onRefresh }) => {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ title: blog.title, content: blog.content });
  const [image, setImage] = useState(null);

  const handleUpdate = async () => {
    const data = new FormData();
    data.append('title', form.title);
    data.append('content', form.content);
    if (image) data.append('image', image);
    await axios.put(`http://localhost:5000/api/posts/${blog.id}`, data);
    setEditing(false);
    onRefresh();
  };

  return (
    <div className="bg-white/10 p-4 rounded-xl space-y-2 backdrop-blur">
      {editing ? (
        <>
          <input
            className="w-full bg-white/20 p-2 rounded"
            value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
          />
          <textarea
            className="w-full bg-white/20 p-2 rounded"
            value={form.content}
            onChange={e => setForm({ ...form, content: e.target.value })}
          />
          <input
            type="file"
            onChange={e => setImage(e.target.files[0])}
          />
          <div className="flex gap-2">
            <button onClick={handleUpdate} className="bg-green-500 px-3 py-1 rounded">💾 Save</button>
            <button onClick={() => setEditing(false)} className="bg-gray-500 px-3 py-1 rounded">Cancel</button>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold">{blog.title}</h2>
          <p>{blog.content}</p>
          {blog.image && <img src={`http://localhost:5000${blog.image}`} className="rounded mt-2" />}
          <p className="text-sm text-gray-300 mt-1">🕒 {new Date(blog.created_at).toLocaleString()}</p>
          <div className="flex gap-2 mt-2">
            <button onClick={() => setEditing(true)} className="bg-yellow-500 px-3 py-1 rounded">✏️ Edit</button>
            <button onClick={onDelete} className="bg-red-500 px-3 py-1 rounded">🗑 Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default BlogCardEditable;
