FROM node:16

WORKDIR /app
COPY . .
WORKDIR /app
RUN npm install --legacy-peer-deps
RUN npm install -g prisma
RUN npm install -g ts-node
