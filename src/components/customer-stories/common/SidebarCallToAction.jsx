"use client";
import Image from "next/image";
import Link from "next/link";

export default function SidebarCallToAction() {
  return (
    <div className="bg-secondary-500 text-primary-500 rounded-xl shadow-lg">
      {/* ✅ Image */}
      <div className="relative w-full h-[160px] rounded-lg overflow-hidden">
        <img
          src="/images/customer-stories/common/man-with-laptop-sidebar-image.avif" // Replace with actual image path
          alt="Call to Action"
          draggable={false}
          className="object-cover"
        />
      </div>

      {/* ✅ Text Content */}
      <div className="mt-0 text-center p-4">
        <h3 className="text-lg font-semibold">Need Quality Design at Scale?</h3>
        <p className="text-sm text-gray-300 mt-1">Aneeverse can help. Let's chat!</p>

        {/* ✅ Button */}
        <Link
          href="/contact"
          className="mt-4 block bg-[#d8ff85] text-black text-sm font-semibold py-2 px-4 rounded-full hover:bg-[#c5f06a] transition"
        >
          Book a call
        </Link>
      </div>
    </div>
  );
}
