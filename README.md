# MyEvents

MyEvents is a social network application centered around events, where users can create, share, and join events. This project is built with Express.js for the server-side logic, MongoDB for database management, and JWT-based authentication for secure access.

1. Build dockerfile
   ```bash
   docker build -t myevents:latest .
2. Run docker container
   ```bash
   docker run --name myevents_container -p 127.0.0.1:3000:3000 -d myevents:latest