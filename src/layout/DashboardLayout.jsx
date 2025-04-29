function DashboardLayout({ children }) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-4">
        {/* Sidebar or Topbar could go here */}
        {children}
      </div>
    );
  }
  
  export default DashboardLayout;
   