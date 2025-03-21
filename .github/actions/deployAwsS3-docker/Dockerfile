FROM alpine:3.10



RUN apk add --no-cache bash curl jq
COPY entrypoint.sh ./entrypoint.sh
RUN env && ls -lart && pwd && chmod +x ./entrypoint.sh
ENTRYPOINT [ "./entrypoint.sh" ]