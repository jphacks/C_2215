FROM node:16.13.0
# USER node
WORKDIR /front/react-project

RUN npm install --save prop-types
RUN npm install -g create-react-app
# RUN npm install react react-dom
# RUN npm install react-scripts
# RUN npm install create-react-app
# RUN npm install @mui/material @emotion/react @emotion/styled
# RUN npm install react-router-dom react-router
# RUN npm install react-hook-form
# RUN npm install yup
# RUN npm install axios
