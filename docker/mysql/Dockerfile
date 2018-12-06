FROM mysql:8

ARG HOST_UID

VOLUME ["/var/lib/mysql"]

RUN usermod -u ${HOST_UID} mysql

RUN echo "max_allowed_packet=32M" >> /etc/mysql/conf.d/mysql.cnf

EXPOSE 3306
