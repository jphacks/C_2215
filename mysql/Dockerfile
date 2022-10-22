FROM mysql:latest

ENV MYSQL_DATABASE fastapi
ENV MYSQL_USER fastapi
ENV MYSQL_PASSWORD passw0rd
ENV TZ "Asia/Tokyo"
ENV MYSQL_ROOT_PASSWORD root


COPY ./init.sql /docker-entrypoint-initdb.d/init.sql