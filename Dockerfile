# Base image
FROM node:alpine

# Make the 'app' folder the current working directory
WORKDIR /app

# Copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# Install project dependencies
RUN yarn install

# Copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# Expose port 3000
EXPOSE 3000

# Serve application in development
CMD [ "yarn", "dev" ]