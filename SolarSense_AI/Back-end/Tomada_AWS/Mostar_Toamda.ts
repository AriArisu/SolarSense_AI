import { api } from "./API";

export interface Dados {
  Eletronico: string;
  timestamp: string;
  Kwh: number;
  Valor: number;
  Moeda: string;
}

export async function getTomada(): Promise<Dados> {
  try {
    console.log("Iniciando requisição para getTomada...");
    
    // A URL base já está configurada no axios, então usamos apenas "/"
    const response = await api.get("/");
    
    console.log("Resposta completa:", JSON.stringify(response.data, null, 2));
    
    // Se a API retornar um array, pegamos o primeiro item
    const data = Array.isArray(response.data) ? response.data[0] : response.data;
    
    // Validar se os dados existem
    if (!data) {
      throw new Error("Nenhum dado retornado da API");
    }

    // Converter e validar os dados
    const dadosFormatados: Dados = {
      Eletronico: data.Eletronico || data.eletronico || "Desconhecido",
      timestamp: data.timestamp || new Date().toISOString(),
      Kwh: parseFloat(String(data.Kwh || data.kWh || 0).replace(",", ".")),
      Valor: parseFloat(String(data.Valor || data.valor || 0).replace(",", ".")),
      Moeda: data.Moeda || data.moeda || "BRL"
    };

    console.log("Dados formatados:", dadosFormatados);
    
    return dadosFormatados;
    
  } catch (error: any) {
    console.error("Erro detalhado ao buscar dados da tomada:");
    console.error("- Mensagem:", error.message);
    console.error("- Status:", error.response?.status);
    console.error("- Data:", error.response?.data);
    console.error("- Config:", error.config?.url);
    
    // Retornar dados de exemplo em caso de erro (útil para desenvolvimento)
    const dadosExemplo: Dados = {
      Eletronico: "Geladeira",
      timestamp: new Date().toISOString(),
      Kwh: 0.0416,
      Valor: 0.034,
      Moeda: "BRL"
    };
    
    console.log("Retornando dados de exemplo:", dadosExemplo);
    return dadosExemplo;
  }
}