import type { Route } from "../+types/_index";

export default function CategoryDetailRouteRoute({
  params,
}: Route.CategoryDetailRouteProps) {
  return (
    <div>
      <h1>Categoria Detalhe: {params.id}</h1>
    </div>
  );
}
