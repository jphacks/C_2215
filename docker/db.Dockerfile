FROM mysql:5.7

WORKDIR /mysql

RUN touch /var/log/mysql/mysqld.log