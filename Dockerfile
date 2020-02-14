FROM node:10.16.0
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 9001
CMD ["npm", "start"]

# FROM node:carbon

# WORKDIR /usr/src/ecommerce-work

# COPY package*.json ./
# COPY package-lock*.json ./
# RUN npm install

# # RUN npm install -D webpack webpack-dev-server webpack-cli

# COPY . ./

# EXPOSE 9001

# CMD ["npm", "start"]