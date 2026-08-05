"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const product = {
      id: Date.now(),
      title,
      price: Number(price),
      image,
    };

    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (response.ok) {
      alert("Mahsulot muvaffaqiyatli qo'shildi!");
      router.push("/products");
      router.refresh();
    } else {
      alert("Xatolik yuz berdi!");
    }
  }

  return (
    <main className="min-h-screen bg-[#F5F7FA] py-10 px-6">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-10">
        <h1 className="text-4xl font-extrabold text-[#0F3040] mb-8">
          Add Product
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block mb-2 text-[#0F3040] text-lg font-bold">
              Product Name
            </label>

            <input
              type="text"
              placeholder="Mahsulot nomi"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="
w-full
rounded-xl
border-2
border-gray-300
bg-white
px-5
py-4
text-lg
text-[#0F3040]
placeholder:text-gray-400
outline-none
transition
focus:border-[#0F3040]
focus:ring-4
focus:ring-[#0F3040]/20
"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-[#0F3040] text-lg font-bold">
              Price
            </label>

            <input
              type="number"
              placeholder="Mahsulot narxi"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="
w-full
rounded-xl
border-2
border-gray-300
bg-white
px-5
py-4
text-lg
text-[#0F3040]
placeholder:text-gray-400
outline-none
transition
focus:border-[#0F3040]
focus:ring-4
focus:ring-[#0F3040]/20
"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-[#0F3040] text-lg font-bold">
              Image Path
            </label>

            <input
              type="text"
              placeholder="/images/Mahsulotning rasmi nomi.jpg"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="
w-full
rounded-xl
border-2
border-gray-300
bg-white
px-5
py-4
text-lg
text-[#0F3040]
placeholder:text-gray-400
outline-none
transition
focus:border-[#0F3040]
focus:ring-4
focus:ring-[#0F3040]/20
"
              required
            />
          </div>

          <button
            type="submit"
            className="
w-full
bg-[#0F3040]
hover:bg-[#60241E]
text-white
py-4
rounded-xl
text-lg
font-bold
shadow-lg
cursor-pointer
hover:shadow-xl
transition-all
duration-300
"
          >
            Add Product
          </button>
        </form>
      </div>
    </main>
  );
}
