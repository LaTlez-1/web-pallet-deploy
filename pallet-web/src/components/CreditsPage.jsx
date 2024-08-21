import React from 'react';
import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom'; // เพิ่มการ import useNavigate

function CreditsPage() {
  const navigate = useNavigate(); // สร้างตัวแปร navigate เพื่อใช้งานในการนำทาง
  return (
    <div className="font-prompt bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 min-h-screen p-4 md:p-8 flex flex-col justify-center items-center">
      <div className="max-w-6xl bg-white rounded-lg shadow-xl p-4 md:p-8 space-y-6 md:space-y-8">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-indigo-600">Credits</h1>
        <button
            onClick={() => navigate('/')}
            className="absolute top-4 left-4 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition duration-300"
        >
            &larr;
        </button>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8">
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700">Advertisers</h2>
            <h3 className="text-gray-700">
                Dr. Watis Leelapatra <br />- CoE KKU Advertiser<br />
                Assoc. Prof. Dr. Sikarin Sukto <br />- IE KKU Advertiser<br />
                Dr. Sugris Limphothong <br />- Supervisor Logistics R&D<br />
                Oranuch Yunpimai <br />- Asst. Manager Inventory<br />
                Anek Khanamurnwai <br />- Inventory Supervisor<br />
                Arnon Lodkum <br />- Inventory Supervisor<br />
            </h3>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700">Supporters</h2>
            <h3 className="text-gray-700">
                Athiphong Sutthiwanna <br />- RDC Korat Manager<br />
                Prof. Wanida Kanarkard <br />- AI codespace server<br />
                Panu Kanoksilapatham <br />- Senior Logistics R&D<br />
                Kittisak Priabying <br />- Youth TBL #5 (WebApp)<br />
                Jirawat Mum-on <br />- Youth TBL #5 (Data)<br />

            </h3>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700">Developer</h2>
            <h3 className="text-gray-700">
                Thanathip Udomchetchamnong <br />- Youth TBL #6
            </h3>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700">Teams</h2>
            <h3 className="text-gray-700">
              TBL RDC Korat<br />
              TBL LRDI Khonkaen<br />
              TBL Bangban<br />
              COSMOS Brewery<br />
              TBL RDC Mahathip<br />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditsPage;
