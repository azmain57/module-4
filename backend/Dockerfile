# Build stage (optional if you don't need building)
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Production image
FROM node:18-alpine

WORKDIR /app

COPY --from=build /app /app

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["node", "src/server.js"]
