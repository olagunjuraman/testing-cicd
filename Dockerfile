# Use the official Node.js 14 image based on Alpine Linux as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 3000 for the Express.js server
EXPOSE 3000

# Start the Express.js server
CMD [ "node", "index.js" ]
