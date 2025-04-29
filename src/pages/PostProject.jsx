import React, { useState } from "react";

export default function PostProject({ onSubmit }) {
  const [name, setName] = useState("");
  const [tech, setTech] = useState("");
  const [hashtag, setHashtag] = useState("");
  const [fileLink, setFileLink] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (name && tech && hashtag && fileLink) {
      const newProject = { name, tech, hashtag, fileLink };
      const existing = JSON.parse(localStorage.getItem("projects")) || [];
      const updated = [...existing, newProject];
      localStorage.setItem("projects", JSON.stringify(updated));
      setSubmitted(true);
      setName("");
      setTech("");
      setHashtag("");
      setFileLink("");
      if (onSubmit) onSubmit(updated);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Post a Project</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Project Name</label>
        <input
          className="w-full border rounded px-3 py-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., AI ChatBot"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Tech Used</label>
        <input
          className="w-full border rounded px-3 py-2"
          value={tech}
          onChange={(e) => setTech(e.target.value)}
          placeholder="e.g., React, Node.js"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Hashtags</label>
        <input
          className="w-full border rounded px-3 py-2"
          value={hashtag}
          onChange={(e) => setHashtag(e.target.value)}
          placeholder="e.g., #opensource #frontend"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">File or Link</label>
        <input
          className="w-full border rounded px-3 py-2"
          value={fileLink}
          onChange={(e) => setFileLink(e.target.value)}
          placeholder="Paste GitHub repo link or uploaded file URL"
        />
      </div>

      <button
        className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800"
        onClick={handleSubmit}
      >
        Submit Project
      </button>

      {submitted && (
        <p className="mt-4 text-green-600 font-medium">Your project is submitted!</p>
      )}
    </div>
  );
}
