# Exercise 2.06: Documentation and ConfigMaps

Use the official Kubernetes documentation for this exercise. [https://kubernetes.io/docs/concepts/configuration/configmap/](https://kubernetes.io/docs/concepts/configuration/configmap/) and [https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/](https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/) should contain everything you need.

Create a ConfigMap for a "dotenv file". A file where you define environment variables that are loaded by the application.
For this use an environment variable "MESSAGE" with value "Hello" to test and print the value. The values from ConfigMap can be either saved to a file and read by the application, or set as environment variables and used by the application through that. Implementation is up to you but the output should look like this:

```plaintext
Hello
2020-03-30T12:15:17.705Z: 8523ecb1-c716-4cb6-a044-b9e83bb98e43.
Ping / Pongs: 3
```

## Solution

### log-output

```
cd log-output
docker build . -t tomirantanen/log-output:2.06
docker push tomirantanen/log-output:2.06
```

### ping-pong

```
cd ping-pong
docker build . -t tomirantanen/ping-pong:2.06
docker push tomirantanen/ping-pong:2.06
```

Create configmap from env file:

`kubectl create configmap log-output-config -n exercises --from-env-file=log-output/env/development.env`

Create Kubernetes resources:

`kubectl apply -f manifests`

View status:

http://localhost:8081/status
