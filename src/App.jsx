import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './index.css';

// Canvas 中的完整 App.jsx 程式碼（節錄，略去 questions 與 personalityDescriptions 初始宣告）
function Home() {
  return (
    <div className="text-center space-y-6">
      <p className="text-xl">這不是一份單純的人格測驗，而是了解你怎麼用語氣被理解的第一步。</p>
      <Link to="/test">
        <button className="bg-gray-800 text-white px-6 py-3 rounded-xl hover:bg-gray-700 transition">開始測驗</button>
      </Link>
    </div>
  );
}

// 其餘元件與主 App 結構照 Canvas 定義，省略顯示...

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f8f6f1] text-gray-800 font-sans">
        <header className="text-center py-6 border-b border-gray-300">
          <h1 className="text-3xl font-semibold">TONE ME：語氣人格分類器</h1>
        </header>
        <main className="p-6 max-w-3xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/result" element={<Result />} />
            <Route path="/types" element={<TypesOverview />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
