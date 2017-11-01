FROM nginx
ADD default.conf /etc/nginx/conf.d/default.conf
ADD build/dist /usr/share/nginx/html