# Learning Docker

Welcome to the **Learning Docker** repository! This repository serves as a starting point for understanding and experimenting with Docker, a popular platform for containerizing applications.

## What is Docker?

Docker is an open platform for developing, shipping, and running applications. With Docker, you can separate your applications from your infrastructure, ensuring consistent operation across different environments.

## Repository Overview

This repository contains resources, examples, and exercises to help you:

-   Understand Docker concepts like containers, images, volumes, and networks.
-   Learn to use the Docker CLI (Command Line Interface).
-   Build and manage your own Dockerized applications.

## Getting Started

<!-- ------------------------- -->

-   for write docker composer yaml file `indent-rainbow` bet extension for write yaml code.

`mongodb://<username>:<password>@<host>:<port>` Example: `mongodb://admin:password@localhost:27017`

<!-- --------------------- -->

### Prerequisites

-   Install Docker on your machine. Follow the [installation guide](https://docs.docker.com/get-docker/).
-   Basic understanding of command-line tools.

### Docker CLI Reference

Familiarize yourself with the Docker CLI commands using the [official Docker CLI Reference](https://docs.docker.com/reference/cli/docker/).

### Clone the Repository

```bash
git clone https://github.com/<your-username>/learning-docker.git
cd learning-docker
```

## Topics Covered

1. **Docker Basics**

    - What is Docker?
    - Images vs. Containers

2. **Docker CLI Commands**

    - Managing Images: `docker pull`, `docker build`, `docker images`
    - Managing Containers: `docker run`, `docker ps`, `docker stop`, `docker rm`
    - Inspecting and Debugging: `docker logs`, `docker exec`, `docker inspect`

3. **Working with Dockerfiles**

    - Writing a Dockerfile
    - Building and running custom images

4. **Volumes and Networks**

    - Persistent storage with volumes
    - Networking in Docker

5. **Docker Compose**
    - Defining multi-container applications
    - Using `docker-compose.yml`

## Useful Commands

Here are some frequently used Docker CLI commands:

### General Commands

-   Check Docker version:

    ```bash
    docker --version
    ```

-   Display system information:
    ```bash
    docker info
    ```

### Container Commands

-   Run a container interactively:

    ```bash
    docker run -it <image_name>
    ```

-   List running containers:

    ```bash
    docker ps
    ```

-   Stop a container:
    ```bash
    docker stop <container_id>
    ```

### Image Commands

-   List images:

    ```bash
    docker images
    ```

-   Remove an image:
    ```bash
    docker rmi <image_id>
    ```

For a complete list of commands, visit the [Docker CLI Reference](https://docs.docker.com/reference/cli/docker/).

## Learning Resources

-   [Docker Documentation](https://docs.docker.com/)
-   [Docker CLI Reference](https://docs.docker.com/reference/cli/docker/)
-   [Play with Docker](https://labs.play-with-docker.com/): An interactive learning environment.

## Contributing

Feel free to contribute by adding examples, fixing issues, or suggesting improvements. Submit a pull request, and we'll review it promptly.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
