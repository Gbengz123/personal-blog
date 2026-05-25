import { Outlet } from 'react-router-dom';
import { Pen } from 'lucide-react';

function AuthLayout() {
  return (
    <div className="min-h-screen bg-[#1a1a18] flex flex-col items-center justify-center px-4 py-12">
      {/* Icon */}
      <div className="w-14 h-14 bg-[#c0522a] rounded-[14px] flex items-center justify-center mb-5">
        <Pen className="w-6 h-6 text-white"></Pen>
      </div>

      {/* Heading */}
      <h1 className="text-white text-2xl font-bold font-serif mb-1">Admin</h1>
      <p className="text-[#888] text-sm mb-7">Content management portal</p>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
