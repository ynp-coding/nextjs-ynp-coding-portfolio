// app/not-found.tsx

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        ไม่พบหน้าที่คุณกำลังค้นหา
      </h2>
      <p className="text-gray-600 mb-6">หน้าดังกล่าวอาจถูกลบหรือย้ายไปแล้ว</p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        กลับหน้าแรก
      </Link>
    </div>
  );
}
