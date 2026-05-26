import type { LoaderFunctionArgs } from "react-router";
import { api } from "~/services/api.server";

export async function loader({ params }: LoaderFunctionArgs) {
  const { id } = params;

  if (!id) {
    throw new Response("ID nao fornecido", { status: 400 });
  }

  try {
    const [category, cars] = await Promise.all([
      api.getCategoryById(id),
      api.getCarById(id),
    ]);

    return { category, cars };
  } catch (error) {
    throw new Response("Categoria nao encontrada", { status: 404 });
  }
}

export default function CategoryDetailRouteRoute({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1>Categoria Detalhe: {params.id}</h1>
    </div>
  );
}
