# Usa uma imagem leve do Node.js
FROM node:20-alpine

# Define o diretório de trabalho
WORKDIR /usr/src/app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante da aplicação
COPY . .

# Expõe a porta da aplicação
EXPOSE 3000

# Comando de inicialização
CMD ["node", "server.js"]


