import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import 'tailwindcss/tailwind.css';

function App() {
  const [model, setModel] = useState(null);
  const [images, setImages] = useState({ front: null, back: null, left: null, right: null });
  const [previews, setPreviews] = useState({ front: '', back: '', left: '', right: '' });
  const [classificationResult, setClassificationResult] = useState(null);
  const [detailedScores, setDetailedScores] = useState(null);

  useEffect(() => {
    async function loadModel() {
      const loadedModel = await mobilenet.load();
      setModel(loadedModel);
    }
    loadModel();
  }, []);

  const handleImageChange = (e, view) => {
    const file = e.target.files[0];
    if (file) {
      setImages({ ...images, [view]: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviews({ ...previews, [view]: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const classifyPallet = async () => {
    if (!model) {
      alert('กรุณารอสักครู่ กำลังโหลดโมเดล');
      return;
    }

    const views = ['ด้านหน้า', 'ด้านขวา', 'ด้านหลัง', 'ด้านซ้าย'];
    let totalScore = 0;
    let detailedScores = {
      A: 0,
      B: 0,
      C_ปลวก: 0,
      C_รา: 0,
      C_สกปรก: 0,
      C_คาน: 0,
      C_ปลอมแปลง: 0,
      C_ดัดแปลง: 0
    };

    for (const view of views) {
      const imgElement = document.getElementById(`${view}Preview`);
      if (imgElement.src) {
        const predictions = await model.classify(imgElement);
        const score = predictions[0].probability;
        totalScore += score;

        // Simulate detailed classification (replace with your actual logic)
        detailedScores.A += Math.random() * 0.3;
        detailedScores.B += Math.random() * 0.3;
        detailedScores.C_ปลวก += Math.random() * 0.1;
        detailedScores.C_รา += Math.random() * 0.1;
        detailedScores.C_สกปรก += Math.random() * 0.1;
        detailedScores.C_คาน += Math.random() * 0.1;
        detailedScores.C_ปลอมแปลง += Math.random() * 0.1;
        detailedScores.C_ดัดแปลง += Math.random() * 0.1;
      }
    }

    const averageScore = totalScore / views.length;
    let palletClass;

    if (averageScore > 0.8) {
      palletClass = 'A';
    } else if (averageScore > 0.6) {
      palletClass = 'B';
    } else {
      palletClass = 'C';
    }

    setClassificationResult(`${palletClass}`);
    setDetailedScores(detailedScores);
  };

  return (
    <div className="font-prompt bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 min-h-screen p-4 md:p-8 flex justify-center items-center">
      <div className="max-w-6xl bg-white rounded-lg shadow-xl p-4 md:p-8 space-y-6 md:space-y-8">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-indigo-600">
          ตรวจสอบคุณภาพไม้พาเลท
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700">Upload</h2>
            {['ด้านหน้า', 'ด้านขวา', 'ด้านหลัง', 'ด้านซ้าย'].map((view) => (
              <div key={view} className="image-upload">
                <label htmlFor={`${view}Image`} className="block mb-2 text-gray-600 capitalize text-sm md:text-base">
                  {view} :
                </label>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <input
                    type="file"
                    id={`${view}TakePhoto`}
                    accept="image/*"
                    capture="environment"
                    className="hidden"
                    onChange={(e) => handleImageChange(e, view)}
                  />
                  <button
                    onClick={() => document.getElementById(`${view}TakePhoto`).click()}
                    className="bg-green-500 text-white py-1 px-2 rounded text-sm md:text-base hover:bg-green-600 transition duration-300"
                  >
                    ถ่ายภาพ
                  </button>
                  
                  <input
                    type="file"
                    id={`${view}Image`}
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageChange(e, view)}
                  />
                  <button
                    onClick={() => document.getElementById(`${view}Image`).click()}
                    className="bg-blue-500 text-white py-1 px-2 rounded text-sm md:text-base hover:bg-blue-600 transition duration-300"
                  >
                    เลือกจากคลังภาพ
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700">Preview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['ด้านหน้า', 'ด้านขวา', 'ด้านหลัง', 'ด้านซ้าย'].map((view) => (
                <img
                  key={view}
                  id={`${view}Preview`}
                  src={previews[view]}
                  // alt={`${view} preview`}
                  className="w-full h-32 md:h-40 object-cover border rounded"
                />
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={classifyPallet}
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded text-lg md:text-xl font-semibold hover:bg-indigo-600 transition duration-300"
        >
          ตรวจสอบ
        </button>

        {classificationResult && (
          <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gray-100 rounded-lg">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700">ผลการตรวจ</h2>
            <p className="text-lg md:text-xl font-bold text-indigo-600 mb-4">{classificationResult}</p>
            <div className="space-y-2">
              {detailedScores &&
                Object.entries(detailedScores).map(([key, value]) => (
                  <p key={key} className="text-gray-700 text-sm md:text-base">
                    <span className="font-semibold">{key}:</span> {(value / 4).toFixed(2)}%
                  </p>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
