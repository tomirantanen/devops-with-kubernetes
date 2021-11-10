# Exercise 1.06: Project v0.4

Use a NodePort Service to enable access to the project.

## Solution

Start cluster with port open:

`k3d cluster create --port 8082:30080@agent:0 -p 8081:80@loadbalancer --agents 2`

Create Kubernetes deployment and service:

`kubectl apply -f manifests/deployment.yaml -f manifests/service.yaml`

Open page in the browser:

http://localhost:8082/index.html
