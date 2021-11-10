# Exercise 1.07: External access with Ingress

"Log output" application currently outputs a timestamp and a random string to the logs.

Add an endpoint to request the current status (timestamp and string) and an ingress so that you can access it with a browser.

You can just store the string and timestamp to the memory.

## Solution

Build Docker image:

`docker build . -t tomirantanen/log-output:1.07`

Push to registry:

`docker push tomirantanen/log-output:1.07`

Create Kubernetes resources:

`kubectl apply -f manifests/deployment.yaml -f manifests/service.yaml -f manifests/ingress.yaml`

View status in:

http://localhost:8081/status
