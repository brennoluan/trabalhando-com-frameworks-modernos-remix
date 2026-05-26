export function ok<T>(data: T): Response {
  return Response.json(data, { status: 200 });
}

export function created<T>(data: T): Response {
  return Response.json(data, { status: 201 });
}

export function badRequest(message: string = "Invalid request"): Response {
  return new Response(message, { status: 400, statusText: "Bad Request" });
}

export function notFound(message: string = "Resource not found"): Response {
  return new Response(message, { status: 404, statusText: "Not Found" });
}

export function serverError(
  message: string = "Internal Server Error",
): Response {
  return new Response(message, {
    status: 500,
    statusText: "Internal Server Error",
  });
}
