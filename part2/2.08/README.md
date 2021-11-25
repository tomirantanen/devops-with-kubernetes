# Exercise 2.08: Project v1.2

Create a database and save the todos there.

Use Secrets and/or ConfigMaps to have the backend access the database.

# Solution

## todo-frontend

```
cd todo-api
docker build . -t tomirantanen/todo-frontend:2.08
docker push tomirantanen/todo-frontend:2.08
```

## todo-api

```
cd todo-api
docker build . -t tomirantanen/todo-api:2.08
docker push tomirantanen/todo-api:2.08
```

Create configmap from env files:

```
kubectl create configmap todo-app-config -n todo-project --from-env-file=todo-api/env/development.env
```

Create secrets:

```
kubectl create secret generic postgres-secret -n todo-project --from-literal=POSTGRES_PASSWORD=<password>
kubectl create secret generic todo-api-secret -n todo-project --from-literal=DB_PASSWORD=<password>
```

Create Kubernetes resources:

`kubectl apply -f manifests`

View todo app:

http://localhost:8081/
