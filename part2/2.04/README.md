# Exercise 2.04: Project v1.1

Create a namespace for the project and move everything related to the project to that namespace.

## Solution

Create namespace:

`kubectl create namespace todo-project`

Create Kubernetes resources:

`kubectl apply -f manifests`

View app:

http://localhost:8081/
