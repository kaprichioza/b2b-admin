FROM gitlab-registry.ozon.ru/docker/fe-nginx-plus:v23

ARG GIT_BRANCH
ARG GIT_COMMIT_SHA
ARG BUILD_TIME
ARG SERVICE_NAME

ENV GIT_BRANCH=$GIT_BRANCH
ENV GIT_COMMIT_SHA=$GIT_COMMIT_SHA
ENV BUILD_TIME=$BUILD_TIME
ENV SERVICE_NAME=$SERVICE_NAME

COPY .o3/build/run.sh /run.sh
COPY .o3/nginx/nginx.conf /etc/nginx/nginx.conf
COPY dist /usr/share/nginx/html

EXPOSE 80

CMD ["sh", "/run.sh"]
