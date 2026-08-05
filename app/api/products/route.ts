import { products } from "./data";

// GET - Barcha mahsulotlarni olish
export async function GET() {
  return Response.json(products);
}

// POST - Yangi mahsulot qo'shish
export async function POST(request: Request) {
  const body = await request.json();

  products.push(body);

  return Response.json({
    message: "Product created successfully",
    product: body,
  });
}