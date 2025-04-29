import React from "react";

export default function HomePage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white p-6">
     
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-blue-900">CollabSphere.ai</h1>
        <div>
          <button className="border border-blue-600 text-blue-900 font-semibold px-4 py-2 rounded mr-2 hover:bg-blue-100">
            Log in
          </button>
          <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600">
            Sign up
          </button>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Find. Match. Collaborate. Smarter.
          </h2>
          <p className="text-lg text-gray-600">
            A real-time, AI-powered open-source collaboration hub for students.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/your-image-path.png"
            alt="Person on laptop illustration"
            className="w-full max-w-sm"
          />
        </div>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div
          className="border rounded-2xl p-4 flex flex-col items-center text-center hover:shadow-md cursor-pointer"
          onClick={() => onNavigate('browse')}
        >
          <img src="/icons/browse.svg" alt="Browse" className="w-10 h-10 mb-2" />
          <p className="font-medium">Browse Projects</p>
        </div>
        <div
          className="border rounded-2xl p-4 flex flex-col items-center text-center hover:shadow-md cursor-pointer"
          onClick={() => onNavigate('matches')}
        >
          <img src="/icons/match.svg" alt="Matches" className="w-10 h-10 mb-2" />
          <p className="font-medium">Matches for You</p>
        </div>
        <div
          className="border rounded-2xl p-4 flex flex-col items-center text-center hover:shadow-md cursor-pointer"
          onClick={() => onNavigate('post')}
        >
          <img src="/icons/post.svg" alt="Post" className="w-10 h-10 mb-2" />
          <p className="font-medium">Post a Project</p>
        </div>
        <div
          className="border rounded-2xl p-4 flex flex-col items-center text-center hover:shadow-md cursor-pointer"
          onClick={() => onNavigate('discussion')}
        >
          <img src="/icons/discuss.svg" alt="Discussions" className="w-10 h-10 mb-2" />
          <p className="font-medium">Discussions</p>
        </div>
      </div>
    </div>
  );
}
