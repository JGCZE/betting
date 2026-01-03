const BASE_URL = import.meta.env.VITE_API_BASE_URL

const apiClient = async<T>(endpoint: string, options?: RequestInit): Promise<T | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("CUSTOM ERROR:", error)
  }
}

export default apiClient