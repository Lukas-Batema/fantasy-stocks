FROM nginx:alpine
COPY docs /usr/share/nginx/html

# Make Directorty of `static` and COPY it
# RUN mkdir /usr/share/nginx/html/static
# COPY static /usr/share/nginx/html/static

# Make Directorty of `src` and COPY it
RUN mkdir /usr/share/nginx/html/src
COPY src /usr/share/nginx/html/src

RUN ls /usr/share/nginx/html

FROM node:alpine
RUN node /src/js/index.js