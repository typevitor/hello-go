FROM golang:1.22-alpine3.19 as builder

WORKDIR /usr/src/app

COPY go.mod .

RUN go mod download && go mod verify

COPY . .

RUN go build -v -o bin/hello

FROM scratch

COPY --from=builder /usr/src/app/bin/hello .

CMD ["./hello"]