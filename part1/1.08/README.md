# Exercise 1.08: Project v0.5

Switch to using Ingress instead of NodePort to access the project. You can delete the ingress of the "Log output" application so they don't interfere with this exercise. We'll look more into paths and routing in the next exercise and at that point you can configure project to run with the "Log output" application side by side.

## Solution

Create Kubernetes resources:

`kubectl apply -f manifests/deployment.yaml -f manifests/service.yaml -f manifests/ingress.yaml`

View page in:

http://localhost:8081/index.html
