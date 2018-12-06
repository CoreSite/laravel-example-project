FROM php:7.2-fpm

ARG HOST_UID
ARG GITHUB_OAUTH_TOKEN

VOLUME ["/var/www/html"]

COPY php.ini /usr/local/etc/php
COPY .bashrc /root/.bashrc
#COPY .ssh/id_rsa /root/.ssh/id_rsa
#COPY .ssh/id_rsa.pub /root/.ssh/id_rsa.pub
#COPY .ssh/known_hosts /root/.ssh/known_hosts

RUN apt-get update && apt-get install -y \
        sudo \
        zlib1g-dev \
        libicu-dev \
        libpq-dev \
        git \
        zip \
        wget \
        mc \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libmcrypt-dev \
        libpng-dev \
        gnupg2 \
        htop \
        nano \
        mysql-client

RUN pecl install mcrypt-1.0.1

RUN docker-php-ext-install -j$(nproc) iconv \
    && docker-php-ext-install -j$(nproc) pdo pdo_mysql \
    && docker-php-ext-configure bcmath \
    && docker-php-ext-install -j$(nproc) bcmath \
    && docker-php-ext-configure mbstring \
    && docker-php-ext-install -j$(nproc) mbstring \
    && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
    && docker-php-ext-install -j$(nproc) gd \
    && docker-php-ext-install -j$(nproc) intl zip opcache pcntl \
    && docker-php-ext-install exif \
    && docker-php-ext-enable mcrypt

RUN echo America/New_York > /etc/timezone && \
    dpkg-reconfigure -f noninteractive tzdata

# install node.js & yarn
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs
RUN curl -sS http://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb http://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install -y yarn

# install composer
RUN set -x && curl -sS https://getcomposer.org/installer | php \
    && mv composer.phar /usr/local/bin/composer

RUN composer config --global github-oauth.github.com "${GITHUB_OAUTH_TOKEN}" \
    && composer global require "fxp/composer-asset-plugin:~1.3"

# prepare permissions
RUN usermod -u ${HOST_UID} www-data
RUN groupmod -g ${HOST_UID} www-data
RUN chsh -s /bin/bash www-data
RUN chown -R www-data:www-data /var/www
#RUN chmod 600 /root/.ssh/id_rsa
#RUN chmod 600 /root/.ssh/id_rsa.pub
#RUN chmod 600 /root/.ssh/known_hosts

# ADD php.ini /usr/local/etc/php/conf.d/40-custom.ini

WORKDIR /var/www/html

CMD ["php-fpm"]

EXPOSE 80 443
