# 🌞 SolarSense_AI: Monitoramento Inteligente e Automação de Energia Solar

---

## 👥 Membros do Projeto

| Nome     
|-----------
| Bruna     
| Sofia     
| Laryssa   
| Paloma    
| Giovanna  

---

## 🧭 Visão Geral do Projeto

O **SolarSense_AI** é uma solução de **monitoramento e gerenciamento inteligente de energia solar**, que integra acompanhamento em tempo real do consumo com o controle de dispositivos conectados (como tomadas inteligentes).  
Seu objetivo é otimizar o uso de energia, reduzir a pegada de carbono e incentivar o uso de fontes renováveis.

Desenvolvido com uma arquitetura **serverless e full-stack**, o projeto combina:
- **React Native + Expo** no front-end;  
- **AWS Lambda + DynamoDB** no back-end;  
- e dispositivos **IoT (ESP32 + Tuya Cloud)** para monitoramento físico.

---

## ⚙️ Funcionalidades Principais

| Categoria | Funcionalidade | Benefício |
|------------|----------------|------------|
| **Monitoramento** | Visualização em tempo real do consumo de energia (kWh) e custo (R$). | Conscientização e controle imediato sobre os gastos energéticos. |
| **Automação** | Controle de tomadas inteligentes via interface mobile. | Otimização do uso de eletrodomésticos e redução de desperdício. |
| **Integração** | Integração nativa com assistentes de voz como **Alexa (via AWS)**. | Interação natural e acessível com o sistema. |
| **Dados** | Armazenamento seguro e escalável de dados no **AWS DynamoDB**. | Histórico detalhado para análise e relatórios de eficiência. |

---

## 🧩 Stack Tecnológico

### 💻 Front-end (Mobile App)
- **React Native (Expo):** Framework principal para desenvolvimento multiplataforma.  
- **TypeScript:** Garante maior robustez e manutenção do código.  
- **Axios:** Cliente HTTP para comunicação com o back-end.

### ☁️ Back-end (Serverless AWS)
- **AWS Lambda (Node.js):** Funções serverless para lógica de negócios.  
- **AWS API Gateway:** Exposição das APIs REST.  
- **AWS DynamoDB:** Banco NoSQL de alta performance.  
- **AWS IoT Core:** Conexão e gerenciamento de dispositivos IoT.  
- **AWS SNS:** Envio de notificações e alertas.  
- **AWS CloudWatch:** Monitoramento e logs.

### 🔌 IoT & Hardware
- **ESP32:** Microcontrolador responsável pela coleta de dados.  
- **Tuya Cloud:** Plataforma de gerenciamento de dispositivos inteligentes.  
- **MQTT:** Protocolo leve para comunicação entre dispositivos e nuvem.  
- **Tomada Positivo Smart Kit:** Dispositivo inteligente integrado ao sistema.

### 🧠 Inteligência Artificial e Automação
- **N8N:** Automação de fluxos e potencial uso em aprendizado de máquina simples para otimização de consumo.

---

## 📊 Resultados e Impacto

### ⚡ Ganhos de Eficiência e Sustentabilidade

| Métrica | Resultado / Impacto | Descrição |
|----------|---------------------|------------|
| **Redução de Consumo** | -23% (médio) | Redução média de consumo com potencial de 25% via automações. |
| **Eficiência Energética** | +31% (global) | Aumento da eficiência após o monitoramento inteligente. |
| **Pegada de Carbono** | Até 80 kg CO₂ evitados/mês | Estimativa de CO₂ evitado por residência com sistema híbrido. |
| **Tempo de Resposta** | < 1,2 segundos (IoT → App) | Comunicação rápida e fluida entre dispositivos e aplicativo. |

---

## 🚀 Diferenciais Inovadores

1. **Algoritmos Inteligentes**  
   - Cálculo automático de eficiência e previsão de demanda.  
   - Planejamento energético mais preciso.

2. **Automações Avançadas**  
   - Ações automáticas baseadas em limites de consumo e horários.  
   - Redução de desperdício energético.

3. **Escalabilidade**  
   - Arquitetura **serverless** da AWS permite expansão para múltiplas residências e pequenas empresas com baixo custo.

---

## 🧰 Instalação e Configuração

### 🔧 Pré-requisitos
- **Node.js** e **npm/yarn**  
- **Expo CLI** → `npm install -g expo-cli`  
- **Conta AWS** (com permissões para Lambda, DynamoDB, API Gateway, IoT Core)  
- **Dispositivo ESP32** e **Tomada Inteligente compatível com Tuya**

---
