"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function EditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();

  const [id, setId] = useState("");

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    async function loadProduct() {
      const { id } = await params;

      setId(id);

      const res = await fetch(`/api/products/${id}`);
      const product: Product = await res.json();

      setTitle(product.title);
      setPrice(product.price.toString());
      setImage(product.image);
    }

    loadProduct();
  }, [params]);

  async function updateProduct(e: React.FormEvent) {
    e.preventDefault();

    const response = await fetch(`/api/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        price: Number(price),
        image,
      }),
    });

    if (response.ok) {
      alert("Mahsulot muvaffaqiyatli yangilandi!");
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
          Edit Product
        </h1>

        <form onSubmit={updateProduct} className="space-y-7">
          <div>
            <label className="block mb-2 text-[#0F3040] text-lg font-bold">
              Product Name
            </label>

            <input
              type="text"
              value={title}
              placeholder="Mahsulot nomi"
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
    font-medium
    text-[#0F3040]
    placeholder:text-gray-400
    outline-none
    transition-all
    duration-300
    focus:border-[#0F3040]
    focus:ring-4
    focus:ring-[#0F3040]/20
  "
            />
          </div>

          <div>
            <label className="block mb-2 text-[#0F3040] text-lg font-bold">
              Price
            </label>

            <input
              type="number"
              value={price}
              placeholder="Mahsulot narxi"
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
    font-medium
    text-[#0F3040]
    placeholder:text-gray-400
    outline-none
    transition-all
    duration-300
    focus:border-[#0F3040]
    focus:ring-4
    focus:ring-[#0F3040]/20
  "
            />
          </div>

          <div>
            <label className="block mb-2 text-[#0F3040] text-lg font-bold">
              Image Path
            </label>

            <input
              type="text"
              value={image}
              placeholder="/images/Mahsulot rasmi nomi.jpg"
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
    font-medium
    text-[#0F3040]
    placeholder:text-gray-400
    outline-none
    transition-all
    duration-300
    focus:border-[#0F3040]
    focus:ring-4
    focus:ring-[#0F3040]/20
  "
            />
          </div>

          <button
            type="submit"
            className="
    w-full
    bg-[#FFDE4E]
    hover:bg-[#FACC15]
    hover:scale-[1.02]
    active:scale-95
    text-black
    py-4
    rounded-xl
    text-lg
    font-bold
    shadow-lg
    transition-all
    duration-300
    cursor-pointer
  "
          >
            Save Changes
          </button>
        </form>
      </div>
    </main>
  );
}
