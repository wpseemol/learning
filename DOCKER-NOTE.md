## Docker Commend

```bash
docker run -it ubuntu
```

```bash
docker images
docker image ls
```

```bash
docker start <container_name>
docker exec <container_name> <command>
docker exec -it <container_name> bash
```

```bash
docker run -it --name container_name node:latest
```

<!-- Docker Port Map -->

```bash
docker run -it -p 1025:1025 <image_name>
```

<!-- docker environment variable  -->

```bash
docker run -it -p 1025:1025 -e key=value -e key=value <image_name>
```

<!-- docker environment variable  -->

```bash

docker build -t <image_name>

```
