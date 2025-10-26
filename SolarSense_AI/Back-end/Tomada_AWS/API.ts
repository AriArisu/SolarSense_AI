import axios from "axios";
import Constants from "expo-constants";

// A URL base já inclui o endpoint /Tomada_1, então não precisamos adicionar na requisição
const API_URL = Constants.expoConfig?.extra?.API_URL || 
                "https://tvsnij4zx0.execute-api.sa-east-1.amazonaws.com/Tomada_1";

console.log("✅ API_URL configurada:", API_URL);

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 segundos de timeout
});

// Interceptor para log de requisições
api.interceptors.request.use(
  (config) => {
    console.log("Requisição enviada:", config.url);
    return config;
  },
  (error) => {
    console.error("Erro na requisição:", error);
    return Promise.reject(error);
  }
);

// Interceptor para log de respostas
api.interceptors.response.use(
  (response) => {
    console.log("Resposta recebida:", response.data);
    return response;
  },
  (error) => {
    console.error("Erro na resposta:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);