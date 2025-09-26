import axios from 'axios';
import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { createWorkflow } from '../utils/n8nConfig';

export interface N8NResponse {
  success: boolean;
  data?: any;
  error?: string;
}

class N8NService {
  private baseURL: string;
  private apiKey: string;

  constructor() {
    this.baseURL = 'https://seu-n8n-instance.com'; // URL do seu n8n
    this.apiKey = 'seu-api-key'; // Configure via variáveis de ambiente
  }

  async sendMessage(userInput: string): Promise<N8NResponse> {
    try {
      const response = await axios.post(
        `${this.baseURL}/webhook/chatbot`,
        {
          message: userInput,
          timestamp: new Date().toISOString(),
        },
        {
          headers: {
            'X-N8N-API-KEY': this.apiKey,
            'Content-Type': 'application/json',
          },
        }
      );

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Erro ao comunicar com n8n:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erro desconhecido',
      };
    }
  }

  // Método alternativo para executar workflows localmente
  async executeLocalWorkflow(userInput: string): Promise<N8NResponse> {
    try {
      // Implementação local do workflow (para casos simples)
      const workflow = createWorkflow();
      // Lógica de execução do workflow aqui
      
      return {
        success: true,
        data: { response: "Resposta do chatbot" },
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erro no workflow',
      };
    }
  }
}

export const n8nService = new N8NService();

export interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

export interface N8NWebhookPayload {
  message: string;
  timestamp: string;
  sessionId?: string;
}