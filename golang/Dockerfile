FROM golang:alpine as builder

WORKDIR /usr/src/app

RUN go mod init codeeducation/m/v2

COPY codeeducation.go .

RUN go build codeeducation.go

FROM scratch

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/codeeducation .

ENTRYPOINT [ "./codeeducation" ]
