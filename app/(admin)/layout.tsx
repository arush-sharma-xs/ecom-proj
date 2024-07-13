import React from "react";
import Link from "next/link";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2>Welcome to Admin Panel</h2>
      <ul className="flex gap-2">
        <li>
          <Link href="/admin/addproduct" className="p-2 bg-blue-300 text-black rounded-md font-bold">Add Product</Link>
        </li>
        <li>
          <Link href="/admin/listproduct" className="p-2 bg-blue-300 text-black rounded-md font-bold">List Product</Link>
        </li>
      </ul>

      <div className="mt-4">{children}</div>
    </div>
  );
}
