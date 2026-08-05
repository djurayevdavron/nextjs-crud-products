import Image from "next/image";
import Link from "next/link";
import DeleteButton from "../components/DeleteButton";
import { products } from "../api/products/data";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-5xl font-extrabold text-[#0F3040] border-l-8 border-[#063B00] pl-4">
            Products
          </h1>

          <Link
            href="/products/add"
            className="bg-[#0F3040] hover:bg-[#60241E] transition-all duration-300 text-white px-6 py-3 rounded-xl font-bold shadow-lg cursor-pointer"
          >
            + Add Product
          </Link>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="h-72 flex justify-center items-center bg-white p-5">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={320}
                  height={250}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-3xl font-extrabold text-[#0F3040]">
                  {product.title}
                </h2>

                <p className="mt-3 text-2xl font-bold text-red-600">
                  {product.price.toLocaleString()} so'm
                </p>

                <div className="flex justify-between mt-7">
                  <Link
                    href={`/products/${product.id}`}
                    className="bg-[#063B00] hover:opacity-90 text-white px-6 py-2 rounded-lg font-semibold cursor-pointer"
                  >
                    View
                  </Link>

                  <Link
                    href={`/products/edit/${product.id}`}
                    className="bg-[#FFDE4E] hover:bg-yellow-300 text-black px-6 py-2 rounded-lg font-semibold cursor-pointer"
                  >
                    Edit
                  </Link>

                  <DeleteButton id={product.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
