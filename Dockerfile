FROM nginx:alpine
COPY docs /usr/share/nginx/html

# Make Directorty of `static` and COPY it
# RUN mkdir /usr/share/nginx/html/static
# COPY static /usr/share/nginx/html/static

# Make Directorty of `src` and COPY it
RUN mkdir /usr/share/nginx/html/src
COPY src /usr/share/nginx/html/src

FROM npm:alpine
RUN npm i --save request