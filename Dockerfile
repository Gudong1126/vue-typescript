FROM nginx

COPY ./dist/ /www/app/
COPY ./nginx.conf /etc/nginx/conf.d/nginx.conf

EXPOSE 81
