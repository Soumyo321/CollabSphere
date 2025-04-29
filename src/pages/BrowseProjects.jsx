// import React from 'react';

// const projects = [
//   {
//     id: 1,
//     title: 'AI-Powered Study Group Matcher',
//     description: 'Matches students based on subject interest and availability using GPT models.',
//     tags: ['AI', 'Collaboration', 'Matcher'],
//     owner: 'Soumyodip',
//   },
//   {
//     id: 2,
//     title: 'Real-Time Campus Event Tracker',
//     description: 'A mobile-first platform to track and post live campus events.',
//     tags: ['React', 'Firebase', 'Events'],
//     owner: 'Priya',
//   },
//   {
//     id: 3,
//     title: 'Hackathon Team Builder',
//     description: 'Builds optimal teams for hackathons based on skill tags and availability.',
//     tags: ['Node.js', 'MongoDB', 'Hackathons'],
//     owner: 'Karan',
//   },
// ];

// export default function BrowseProjects({ onNavigate }) {
//   return (
//     <div className="min-h-screen bg-[#F8FAFC] px-6 py-10">
//       {/* Top Nav */}
//       <div className="flex justify-between items-center mb-10">
//         <h1 className="text-3xl font-bold text-blue-900">Browse Projects</h1>
//         <button
//           onClick={() => onNavigate('home')}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Back to Home
//         </button>
//       </div>

//       {/* Projects Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {projects.map((project) => (
//           <div key={project.id} className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all">
//             <h2 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h2>
//             <p className="text-gray-600 text-sm mb-4">{project.description}</p>
//             <div className="flex flex-wrap gap-2 mb-3">
//               {project.tags.map((tag, i) => (
//                 <span key={i} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
//                   #{tag}
//                 </span>
//               ))}
//             </div>
//             <p className="text-sm text-gray-500">Submitted by: <span className="font-medium">{project.owner}</span></p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";

export default function BrowseProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(stored);
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">All Submitted Projects</h2>

      {projects.length === 0 ? (
        <p className="text-gray-600">No projects submitted yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="border rounded-xl p-4 shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-blue-900">{proj.name}</h3>
              <p className="text-sm text-gray-700 mt-1">🛠 {proj.tech}</p>
              <p className="text-sm text-gray-600">🏷 {proj.hashtag}</p>
              <a
                href={proj.fileLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline mt-2 block"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
