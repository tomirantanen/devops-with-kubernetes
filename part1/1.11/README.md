# Exercise 1.11: Persisting data

Let's share data between "Ping-pong" and "Log output" applications using persistent volumes. Create both a _PersistentVolume_ and _PersistentVolumeClaim_ and alter the _Deployment_ to utilize it. As _PersistentVolume_ is often maintained by cluster administrators rather than developers and are not application specific you should keep the definition for that separated.

Save the number of requests to "Ping-pong" application into a file in the volume and output it with the timestamp and hash when sending a request to our "Log output" application. In the end, the two pods should share a persistent volume between the two applications. So the browser should display the following when accessing the "Log output" application:

```plaintext
2020-03-30T12:15:17.705Z: 8523ecb1-c716-4cb6-a044-b9e83bb98e43.
Ping / Pongs: 3
```

## Solution

### ping-pong

```
cd ping-pong
docker build . -t tomirantanen/ping-pong:1.11
docker push tomirantanen/ping-pong:1.11
```

### log-output

```
cd log-output
docker build . -t tomirantanen/log-output:1.11
docker push tomirantanen/log-output:1.11
```

Create directory in `k3d-k3s-default-agent-0` container:

`docker exec k3d-k3s-default-agent-0 mkdir -p /tmp/kube`

Create Kubernetes resources:

`kubectl apply -f manifests`

Request /pingpong to increase ping counter:

http://localhost:8081/pingpong

View ping count, date and hash in:

http://localhost:8081/status
