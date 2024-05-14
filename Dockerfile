## Use node to build the application
#FROM node:latest as build
#WORKDIR /app
#COPY package*.json ./
#RUN npm install
#COPY . ./
#RUN npm run build
#
## Set up Nginx to serve the built application
#FROM nginx:alpine
#COPY --from=build /app/build /usr/share/nginx/html
#COPY amigo.crt /etc/nginx/amigo.crt
#COPY amigo.key /etc/nginx/amigo.key
#
## Replace default.conf with your configuration that includes SSL settings
#COPY nginx.conf /etc/nginx/conf.d/default.conf
#
#EXPOSE 443
#CMD ["nginx", "-g", "daemon off;"]

# Use node to build the application
FROM node:latest as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build
RUN ls -la /app  # Add this line to list contents of the directory

# Set up Nginx to serve the built application
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY amigo.crt /etc/nginx/amigo.crt
COPY amigo.key /etc/nginx/amigo.key
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
