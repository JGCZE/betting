const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const httpGetRequest = async<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T | undefined> => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}

export const httpPostRequest = async <T>(
  endpoint: string,
  data: unknown,
): Promise<T | undefined> => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    body: JSON.stringify(data),
    credentials: 'include',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    method: "POST",
  })

  if (!response.ok) {
    throw new Error(`Login failed with status: ${response.status}`);
  }

  return response.json() as Promise<T>;
}
