FROM bash:5.1.12

RUN apk update
RUN apk add curl

COPY job.sh /

CMD ["bash", "/job.sh"]
