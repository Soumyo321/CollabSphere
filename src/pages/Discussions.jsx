import React from 'react';

const discussions = [
  { id: 1, user1: 'Ravi', message1: 'I wanted to enroll...', user2: 'Sonu', message2: 'Contact to' },
  // …etc
];
const messages = [ 'Msg 1', 'Msg 2', 'Msg 3', 'Msg 4' ];

export default function Discussion({ onNavigate }) {
  return (
    <div className="min-h-screen bg-[#0B1320] text-white px-6 py-8">
      {/* — NAV BAR — */}
      <div className="flex justify-between items-center mb-6 text-lg text-gray-300">
        <button onClick={() => onNavigate('home')} className="hover:underline">Home</button>
        <span>Discussions</span>
        <span className="opacity-50">Analyse</span>
        <span className="opacity-50">Profile</span>
      </div>

      {/* — ONGOING DISCUSSIONS — */}
      <h2 className="text-3xl font-semibold mb-4">Ongoing Discussion</h2>
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-wrap gap-4">
          {discussions.map(d => (
            <div key={d.id} className="bg-[#FFA690] text-black rounded-xl p-4 w-[200px]">
              <p><strong>{d.user1} :</strong> {d.message1}</p>
              <p><strong>{d.user2} :</strong> {d.message2}</p>
            </div>
          ))}
        </div>
        <button className="bg-[#6A8DFF] text-white rounded-md px-4 py-1">View all</button>
      </div>

      {/* — INBOX — */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl">Inbox</h2>
          <button className="bg-[#6A8DFF] text-white px-3 py-1 rounded-md">Refine</button>
        </div>
        <div className="bg-[#4A369D] p-4 rounded-xl space-y-4">
          {messages.map((_, i) => (
            <div key={i} className="bg-gray-200 h-12 rounded-md"></div>
          ))}
        </div>
      </div>

      {/* — FLOATING MENU — */}
      <div className="fixed bottom-6 right-6 bg-gray-200 w-12 h-12 rounded-full flex flex-col justify-center items-center shadow-md">
        <span className="block w-6 h-1 bg-gray-700 mb-1 rounded-full"></span>
        <span className="block w-6 h-1 bg-gray-700 mb-1 rounded-full"></span>
        <span className="block w-6 h-1 bg-gray-700 rounded-full"></span>
      </div>
    </div>
  );
}
