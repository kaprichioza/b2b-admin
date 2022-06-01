#!/bin/sh

JSON="{$(echo "
\"platform_name\":\"nginx\",
\"platform_version\":\"1.15\",
\"vcs_name\":\"GIT\",
\"vcs_revision\":\"${GIT_COMMIT_SHA}\",
\"vcs_summary\":\"branch ${GIT_BRANCH}\",
\"build_date\":\"${BUILD_TIME}\",
\"app_name\":\"${SERVICE_NAME}\",
\"env\":\"${ENV}\",
\"LOGS_SEVERITY\":\"${LOGS_SEVERITY}\",
\"LOGS_GATEWAY\":\"${LOGS_GATEWAY}\",
\"TRACKER_HOST\":\"${TRACKER_HOST}\",
\"TRACKER_TRINITY_STORAGE_URL\":\"${TRACKER_TRINITY_STORAGE_URL}\",
\"SENTRY_DSN\":\"${SENTRY_DSN}\",
\"REALMS\":\"${REALMS}\",
\"KEYCLOAK_ENDPOINT\":\"${KEYCLOAK_ENDPOINT}\"
")}"

echo $JSON
echo $JSON > /usr/share/nginx/html/version.json
echo "window.VERSION = ${JSON}" > /usr/share/nginx/html/version.js

sed -i -e "s+\${KUBER_ENV}+$KUBER_ENV+" -e "s+\${KEYCLOAK_HOST}+$KEYCLOAK_HOST+" /etc/nginx/nginx.conf

nginx -g "daemon off;"
