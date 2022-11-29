# Build image
FROM node:18-alpine as builder

# Create app directory
WORKDIR /usr/src/app
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm ci

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

# Server image
FROM nginx:stable-alpine

COPY --from=builder /usr/src/app/nginx/ ./etc/nginx/
COPY --from=builder /usr/src/app/dist/devolio-front /usr/src/app

EXPOSE 80

ENTRYPOINT nginx -g 'daemon off;'
