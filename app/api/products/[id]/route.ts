import { products } from "../data";

// GET - Bitta mahsulotni olish
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return Response.json(
      { message: "Product not found" },
      { status: 404 }
    );
  }

  return Response.json(product);
}

// PATCH - Mahsulotni yangilash
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return Response.json({
      message: "Product not found",
    });
  }

  product.title = body.title;
  product.price = body.price;
  product.image = body.image;

  return Response.json({
    message: "Product updated successfully",
    product,
  });
}

// DELETE - Mahsulotni o'chirish
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const index = products.findIndex(
    (product) => product.id === Number(id)
  );

  if (index === -1) {
    return Response.json({
      message: "Product not found",
    });
  }

  products.splice(index, 1);

  return Response.json({
    message: "Product deleted successfully",
  });
}