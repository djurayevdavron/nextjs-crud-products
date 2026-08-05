"use client";

import { useRouter } from "next/navigation";

interface DeleteButtonProps {
  id: number;
}

export default function DeleteButton({ id }: DeleteButtonProps) {
  const router = useRouter();

  async function deleteProduct() {
    const confirmDelete = confirm(
      "Haqiqatan ham ushbu mahsulotni o'chirmoqchimisiz?"
    );

    if (!confirmDelete) return;

    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      alert("Mahsulot muvaffaqiyatli o'chirildi!");
      router.refresh();
    } else {
      alert("Xatolik yuz berdi!");
    }
  }

  return (
    <button
      onClick={deleteProduct}
      className="bg-[#0F3040] hover:bg-[#1b4c63] text-white px-6 py-2 rounded-xl font-semibold transition-all duration-300"
    >
      Delete
    </button>
  );
}