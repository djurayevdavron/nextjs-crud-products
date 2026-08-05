import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] flex items-center justify-center px-6">
      <div className="text-center">
        <Image
          src="/images/logo-new.png"
          alt="Najot Ta'lim Logo"
          width={200}
          height={200}
          priority
          className="
    logo-animation
    mx-auto
    mb-8
    cursor-pointer
  "
        />
        <h1 className="text-6xl md:text-7xl font-black tracking-tight text-[#0F3040]">
          Najot Ta'lim Shop
        </h1>

        <Link
          href="/products"
          className="
            inline-flex
            items-center
            justify-center
            mt-12
            cursor-pointer
            rounded-2xl
            bg-[#0F3040]
            px-10
            py-4
            text-lg
            font-bold
            text-white
            shadow-xl
            transition-all
            duration-300
            hover:bg-[#60241E]
            hover:shadow-2xl
            hover:-translate-y-1
            active:scale-95
          "
        >
          View Products →
        </Link>
      </div>
    </main>
  );
}
