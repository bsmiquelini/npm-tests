FROM alpine:3.10



RUN apk add --no-cache bash curl jq

WORKDIR /github/workspace
COPY entrypoint.sh ./entrypoint.sh
RUN env && ls -lart && pwd && chmod +x ./entrypoint.sh
