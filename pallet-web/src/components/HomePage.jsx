import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import leftLogo from '../assets/logo-tbl.svg';
import rightLogo from '../assets/logo-loscam.jpg';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="font-prompt bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 min-h-screen p-4 md:p-8 flex flex-col justify-center items-center">
      <div className="max-w-4xl bg-white rounded-lg shadow-xl p-4 md:p-8 space-y-6 md:space-y-8">
        {/* Logo and Title Section */}
        <div className="relative flex justify-between items-center mb-16">
          <img src={leftLogo} alt="Left Logo" className="w-24 h-24 absolute top-0 left-0" />
          <img src={rightLogo} alt="Right Logo" className="w-24 h-14 absolute top-5 right-0" />
        </div>

        <div className="flex flex-col items-center mt-16">
            <h1 className="text-4xl md:text-3xl font-bold text-center text-indigo-600">
              <br/>PaL Let's
            </h1>
        </div>


        <div className="flex flex-col space-y-4 md:space-y-6">
          <button
            onClick={() => navigate('/app')}
            className="bg-indigo-500 text-white py-2 px-4 rounded text-lg md:text-xl font-semibold hover:bg-indigo-600 transition duration-300"
          >
            ตรวจสอบไม้พาเลท
          </button>

          <button
            onClick={() => navigate('/download-excel')}
            className="bg-blue-500 text-white py-2 px-4 rounded text-lg md:text-xl font-semibold hover:bg-blue-600 transition duration-300"
          >
            ดาวน์โหลดไฟล์ Excel
          </button>

          <button
            onClick={() => navigate('/credits')}
            className="bg-green-500 text-white py-2 px-4 rounded text-lg md:text-xl font-semibold hover:bg-green-600 transition duration-300"
          >
            Credit
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;