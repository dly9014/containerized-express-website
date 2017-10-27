# About
A website via express, deployed on docker containers, managed as part of a Kubernetes cluster, hosted on Google Cloud Platform

## Dockerizing the app and deploying it to the k8s cluster
```
docker build -t gcr.io/containerized-express-website/node-app:0.0.1 .
```

```
gcloud docker -- push gcr.io/containerized-express-website/node-app:0.0.1
```

```
kubectl create -f deployment.yml
```

```
kubectl create -f service.yml
```

## Access the resulting website
```
kubectl get services
```
get the EXTERNAL-IP, and point browser to {EXTERNAL-IP}:8000


