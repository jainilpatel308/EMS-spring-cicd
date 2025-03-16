# Use Node.js as base image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all frontend files
COPY . .

# Expose port
EXPOSE 3000

# Start the React application
CMD ["npm", "start"]
