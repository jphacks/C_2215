FROM node:16.13.0
# USER node
WORKDIR /front/react-project

RUN npm install -g create-react-app
RUN npm install --save react-router-dom
RUN npm install --save prop-types
