# Exercise 2.03: Keep them separated

Create a namespace for the applications in the exercises. Move the "Log output" and "Ping-pong" to that namespace and use that in the future for all of the exercises. You can follow the material in the default namespace.

## Solution

Create namespace:

`kubectl create namespace exercises`

Create Kubernetes resources:

`kubectl apply -f manifests`

Request /pingpong to increase ping counter:

http://localhost:8081/pingpong

View ping count, date and hash in:

http://localhost:8081/status
