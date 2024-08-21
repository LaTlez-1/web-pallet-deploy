import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom'; // เพิ่มการ import useNavigate

function ExcelDownload() {
  const navigate = useNavigate(); // สร้างตัวแปร navigate เพื่อใช้งานในการนำทาง
  const handleDownload = () => {
    const data = [
      {
        date: '2024-08-20',
        num_wood: 5,
        front_img: '/path/to/front.jpg',
        right_img: '/path/to/right.jpg',
        back_img: '/path/to/back.jpg',
        left_img: '/path/to/left.jpg',
        A_pred: 0.8,
        B_pred: 0.1,
        C_ปลวก_pred: 0.05,
        C_รา_pred: 0.01,
        C_สกปรก_pred: 0.02,
        C_คาน_pred: 0.01,
        C_ปลอมแปลง_pred: 0.01,
        C_ดัดแปลง_pred: 0.0,
        A_real: 0.7,
        B_real: 0.15,
        C_ปลวก_real: 0.05,
        C_รา_real: 0.02,
        C_สกปรก_real: 0.03,
        C_คาน_real: 0.02,
        C_ปลอมแปลง_real: 0.02,
        C_ดัดแปลง_real: 0.01,
        pred_result: 'A',
      },
      // เพิ่มข้อมูลได้ตามต้องการ
    ];

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Pallet Quality');

    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, 'pallet_quality_report.xlsx');
  };

  return (
    <div className="font-prompt bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 min-h-screen p-4 md:p-8 flex flex-col justify-center items-center">
      <div className="max-w-4xl bg-white rounded-lg shadow-xl p-4 md:p-8 space-y-6 md:space-y-8">
        <button
            onClick={() => navigate('/')}
            className="absolute top-4 left-4 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition duration-300"
        >
            &larr;
        </button>

        <h1 className="text-2xl md:text-4xl font-bold text-center text-indigo-600">ดาวน์โหลดไฟล์ Excel</h1>
        <button
          onClick={handleDownload}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded text-lg md:text-xl font-semibold hover:bg-blue-600 transition duration-300"
        >
          ดาวน์โหลด
        </button>
      </div>
    </div>
  );
}

export default ExcelDownload;
