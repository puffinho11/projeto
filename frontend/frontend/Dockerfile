# Etapa 1: imagem base
FROM node:20-alpine

# Diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar todos os arquivos da aplicação (incluindo server.js)
COPY . .

# Expor porta 3000
EXPOSE 3000

# Rodar o servidor
CMD ["node", "server.js"]


