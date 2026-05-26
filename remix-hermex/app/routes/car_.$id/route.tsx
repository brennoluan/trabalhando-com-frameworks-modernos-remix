import type { Route } from "../+types/_index";

export default function CarDetailRoute({ params }: Route.CarDetailRouteProps) {
  return (
    <div>
      <h1>Carro Detalhe: {params.id}</h1>
    </div>
  );
}
