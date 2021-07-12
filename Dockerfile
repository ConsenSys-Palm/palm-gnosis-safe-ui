FROM nginx:1.21-alpine

# Remove nginx user
RUN sed -i '/^user.*nginx;/d' /etc/nginx/nginx.conf

# Update default port to 3000
RUN sed -i 's/\(listen.*\)80;/\13000;/g' /etc/nginx/conf.d/default.conf

# Update permission on paths
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /etc/nginx/conf.d && \
    touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid

# Expose on a port above 1024
EXPOSE 3000

# Run as nginx user
USER nginx

# Copy application files
COPY app/* /usr/share/nginx/html/

