const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const AI_BASE_URL = `${API_BASE_URL}/ai`;

export const generateAIRecommendationApi = (request) => {
    return fetch(`${AI_BASE_URL}/recommendation`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(request)
  });
};