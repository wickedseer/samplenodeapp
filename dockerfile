FROM node:14-alpine
WORKDIR /app
COPY . /app 
RUN npm install --force
EXPOSE 3000
ENV PORT 3000
CMD node index.js