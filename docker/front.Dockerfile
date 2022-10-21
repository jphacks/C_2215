FROM node:16.13.0
# USER node
WORKDIR /front/react-project

RUN npm install --save prop-types
RUN npm install -g create-react-app
RUN npm install react react-dom
RUN npm install --save styled-components
RUN npm install react-scripts
RUN npm install create-react-app
RUN npm install axios


# RUN npm install -g create-react-app
# RUN npm install --save react-router-dom
# RUN npm install --save prop-types
# RUN npm install react-scripts
# RUN npm install axios


