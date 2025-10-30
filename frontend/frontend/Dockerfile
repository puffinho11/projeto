# Etapa 1: build do frontend
FROM node:20 AS build

WORKDIR /app
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante dos arquivos
COPY . .

# Gera o build do Vite
RUN npm run build

# Etapa 2: Servidor Nginx
FROM nginx:alpine

# Copia os arquivos de build do Vite para o diretório público do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

# Comando padrão do Nginx
CMD ["nginx", "-g", "daemon off;"]

