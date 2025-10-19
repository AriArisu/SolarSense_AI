import { api } from "./API";

export interface Dados {
  Eletronico: string;
  timestamp: string;
  Kwh: number;
  Valor: number;
  Moeda: string;
}


export async function getTomada (){
 const response = await api.get("/Tomada_1");
  return response.data;
}

export async function getTomadaByEletronico(Eletronico: string){
  const response = await api.get(`/Tomada_1/${Eletronico}`);
  return response.data;
}