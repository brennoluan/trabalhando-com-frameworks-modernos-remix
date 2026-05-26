import { URLSearchParams } from "url";
import type { Category, Car } from "~/types";

const API_BASE_URL = "http://localhost:3001";

async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Response(`Falha ao fazer requisicao para ${url}`, {
      status: response.status,
      statusText: response.statusText,
    });
  }
  return response.json();
}

export const api = {
  async getCategory(): Promise<Category[]> {
    return fetchApi<Category[]>("/category");
  },
  async getCategoryById(id: number | string): Promise<Category> {
    return fetchApi<Category>(`/category/${id}`);
  },
  async getCars(): Promise<Car[]> {
    return fetchApi<Car[]>("/car");
  },
  async getCarById(id: number | string): Promise<Car> {
    return fetchApi<Car>(`/car/${id}`);
  },
  async getCarsByCategory(categoryId: number | string): Promise<Car[]> {
    const params = new URLSearchParams({
      categoryId: categoryId.toString(),
    });
    return fetchApi<Car[]>(`/car?${params.toString()}`);
  },
};
