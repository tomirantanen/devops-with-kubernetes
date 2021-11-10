# Exercise 1.09: More services

Develop a second application that simply responds with "pong 0" to a GET request and increases a counter (the 0) so that you can see how many requests have been sent. The counter should be in memory so it may reset at some point. Create a new deployment for it and have it share ingress with "Log output" application. Route requests directed '/pingpong' to it.

In future exercises, this second application will be referred to as "ping-pong application". It will be used with "Log output" application.

The ping-pong application will need to listen requests on '/pingpong', so you may have to make changes to its code. This can be avoided by configuring the ingress to rewrite the path, but we will leave that as an optional exercise. You can check out https://kubernetes.io/docs/concepts/services-networking/ingress/#the-ingress-resource

## Solution

Build Docker image:

`docker build . -t tomirantanen/ping-pong:1.09`

Push to registry:

`docker push tomirantanen/ping-pong:1.09`

Create Kubernetes resources:

`kubectl apply -f manifests`

Pingpong and log output status are available in:

http://localhost:8081/pingpong
http://localhost:8081/status
