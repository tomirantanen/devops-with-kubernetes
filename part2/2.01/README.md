# Exercise 2.01: Connecting pods

Connect the "Log output" application and "Ping-pong" application. Instead of sharing data via files use HTTP endpoints to respond with the number of pongs. Deprecate all the volume between the two applications for the time being.

The output will stay the same:

```
2020-03-30T12:15:17.705Z: 8523ecb1-c716-4cb6-a044-b9e83bb98e43.
Ping / Pongs: 3
```

## Solution

### log-output

```
cd log-output
docker build . -t tomirantanen/log-output:2.01
docker push tomirantanen/log-output:2.01
```

### ping-pong

```
cd ping-pong
docker build . -t tomirantanen/ping-pong:2.01
docker push tomirantanen/ping-pong:2.01
```

Create Kubernetes resources:

`kubectl apply -f manifests`

Request /pingpong to increase ping counter:

http://localhost:8081/pingpong

View ping count, date and hash in:

http://localhost:8081/status
