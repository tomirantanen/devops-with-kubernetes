# Exercise 2.07: Stateful applications

Run a postgres database and save the Ping-pong application counter into the database.

The postgres database and Ping-pong application should not be in the same pod. A single postgres database is enough and it may disappear with the cluster but it should survive even if all pods are taken down.

You should not write the database password in plain text.

## Solution

### log-output

```
cd log-output
docker build . -t tomirantanen/log-output:2.07
docker push tomirantanen/log-output:2.07
```

### ping-pong

```
cd ping-pong
docker build . -t tomirantanen/ping-pong:2.07
docker push tomirantanen/ping-pong:2.07
```

Create configmaps from env files:

```
kubectl create configmap ping-pong-config -n exercises --from-env-file=ping-pong/env/development.env
kubectl create configmap log-output-config -n exercises --from-env-file=log-output/env/development.env
```

Create secrets:

```
kubectl create secret generic postgres-secret -n exercises --from-literal=POSTGRES_PASSWORD=<password>
kubectl create secret generic ping-pong-secret -n exercises --from-literal=DB_PASSWORD=<password>
```

Create Kubernetes resources:

`kubectl apply -f manifests`

Increase ping count:

http://localhost:8081/pingpong

View status:

http://localhost:8081/status
