import React from 'react';

function BlogCard({ title, content }) {
  return (
    <div className="bg-white/20 p-4 rounded-xl shadow hover:bg-white/30 transition-all backdrop-blur-sm">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <p className="text-white/90 mt-2">{content}</p>
    </div>
  );
}

export default BlogCard;
