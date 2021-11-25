# Exercise 2.10: Project v1.3

The project could really use logging.

Add request logging so that you can monitor every todo that is sent to the backend.

Set the limit of 140 characters for todos into the backend as well. Use Postman or curl to test that too long todos are blocked by the backend and you can see the non-allowed messages in your grafana.

## Solution

Build and push todo-api docker image:

```
cd todo-api
docker build . -t tomirantanen/todo-api:2.10
docker push tomirantanen/todo-api:2.10
```

Install prometheus and grafana:

```
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo add stable https://charts.helm.sh/stable
kubectl create namespace prometheus
helm install prometheus-community/kube-prometheus-stack --generate-name --namespace prometheus
kubectl get po -n prometheus
kubectl -n prometheus port-forward kube-prometheus-stack-1637845151-grafana-78b94874d7-nclj9 3000
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update
kubectl create namespace loki-stack
helm upgrade --install loki --namespace=loki-stack grafana/loki-stack
```

Create Kubernetes resources:

`kubectl apply -f manifests`

View todo app:

http://localhost:8081

View logs:

http://localhost:3000

Configure Loki data source url to: `http://loki.loki-stack:3100`

Write query `{app="todo-api"}` into log browser to see backend logs.
