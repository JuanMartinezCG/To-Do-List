# Usa una imagen oficial de Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expón el puerto que Vite usa
EXPOSE 5173

# Inicia el servidor Vite
CMD ["npm", "run", "dev", "--", "--host"]
