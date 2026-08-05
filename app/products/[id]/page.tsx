import Image from "next/image";
import Link from "next/link";

async function getProduct(id: string) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Product not found");
  }

  return res.json();
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await getProduct(id);

  return (
    <main className="min-h-screen bg-[#F5F7FA] py-12 px-6">
      <div className="max-w-5xl mx-auto">

        <Link
          href="/products"
          className="inline-block mb-8 text-[#0F3040] font-semibold hover:underline"
        >
          ← Back to Products
        </Link>

        <div className="bg-white rounded-3xl shadow-xl p-10 grid md:grid-cols-2 gap-10">

          <div className="flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
              className="object-contain max-h-[450px]"
            />
          </div>

          <div className="flex flex-col justify-center">

            <h1 className="text-5xl font-extrabold text-[#0F3040]">
              {product.title}
            </h1>

            <p className="text-3xl font-bold text-red-600 mt-6">
              {product.price.toLocaleString()} so'm
            </p>

            <p className="mt-4 text-gray-600">
              Product ID: <span className="font-bold">{product.id}</span>
            </p>

            <Link
              href={`/products/edit/${product.id}`}
              className="mt-10 w-fit bg-[#FFDE4E] hover:bg-yellow-300 text-black px-8 py-3 rounded-xl font-bold transition"
            >
              Edit Product
            </Link>

          </div>

        </div>
      </div>
    </main>
  );
}