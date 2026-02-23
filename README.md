# to-do-list
The application allows users to create, view, update, and delete tasks with persistent data storage.

---

##  How to Run

### Install yarn
```bash
yarn 
```

### Start PostgreSQL (Docker)

```bash
docker compose up -d
```


### Run BackEnd

```bash
cd backend
yarn 
yarn start:dev
```

### Run FrontEnd

```bash
cd frontend
yarn 
yarn dev
```

Frontend runs at:
http://localhost:3000

---

### Endpoints

- GET /tasks - get all tasks
- POST /tasks - create task
- PATCH /tasks/:id - update task status
- DELETE /tasks/:id - delete task
