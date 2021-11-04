# Exercise 1.01: Getting started

**Exercises can be done with any language and framework you want.**

Create an application that generates a random string on startup, stores this string into memory, and outputs it every 5 seconds with a timestamp. e.g.

```plaintext
2020-03-30T12:15:17.705Z: 8523ecb1-c716-4cb6-a044-b9e83bb98e43
2020-03-30T12:15:22.705Z: 8523ecb1-c716-4cb6-a044-b9e83bb98e43
```

Deploy it into your Kubernetes cluster and confirm that it's running with `kubectl logs ...`

You will keep building this application in the future exercises. This application will be called "Log output".

## Solution

Build Docker image:

`docker build . -t tomirantanen/log-output:1.01`

Push to registry:

`docker push tomirantanen/log-output:1.01`

Create Kubernetes deployment:

```
> kubectl create deployment log-output --image=tomirantanen/log-output:1.01
deployment.apps/log-output created

> kubectl get pods
NAME                          READY   STATUS    RESTARTS   AGE
log-output-6598855d57-6cllh   1/1     Running   0          43s

> kubectl logs -f log-output-6598855d57-6cllh

> exercise-1.01@1.0.0 start
> node dist/index.js

2021-11-04T07:34:50.329Z 5c4031af-1217-472e-a021-f62b107e2c73
2021-11-04T07:34:55.331Z 5c4031af-1217-472e-a021-f62b107e2c73
2021-11-04T07:35:00.303Z 5c4031af-1217-472e-a021-f62b107e2c73
2021-11-04T07:35:05.306Z 5c4031af-1217-472e-a021-f62b107e2c73
2021-11-04T07:35:10.312Z 5c4031af-1217-472e-a021-f62b107e2c73
```
