FROM node:20

# Set working directory inside container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Run the app
CMD ["node", "index.js"]
