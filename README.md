## Description

This is the repo for the Spaak technical assessment. This is a self contained repo that runs locally without dependencies by means of Docker. There is a `docker-compose.yml` in the root defining a db (postgres) and pgAdmin for visual access. Frontend and Backend are created by using NextJS/React/TypeScript. For backend communication Spaak preferred tRPC, so the NextJS project has been decked out with a tRPC Router. Prisma ORM is used as a mapper between the backend and the database.

## Getting Started

First, create a `.env` file with the following entry:

```
DATABASE_URL="postgresql://headbendover:raisetheposterior@localhost:5432/spaak?schema=public"
```

Then, run the development server:

```bash
npm run dev
```

This command does a few things:

1. It registers a chutdown callback for when the process is stopped (CTRL+C) in order to also take down the docker containers, so they don't consume resources while you're not developing and also to release the occupied ports.
2. It spins up the docker containers by calling `docker-compose up`.
3. Even though it waits for the containers to be Healthy, that doesn't mean the services inside have been spun up completely yet, so the process waits 10 seconds for that to happen.
4. It generates Prisma types and runs `npx prisma migrate dev` to get the database in the right structure.
5. Then it runs `npx prisma db seed` to seed the database. It tries to fetch the required data in realtime, but relies on a backup file to keep running for demonstration purposes. This is only in case there is an unavoidable issue, such as a lack of internet connection or the upstream API not being available or faulty.
6. Finally, it runs `next dev` to spin up the NextJS project.

### To see the Frontend
Open [http://localhost:3000](http://localhost:3000) with your browser to see the resulting NextJS frontend, fetching and showing the proposals.

### To view the database
1. Open [http://localhost:8080](http://localhost:8080)
2. Login credentials are pickle@rick.me/legrick as user/password
3. Right-click Servers and register a new server
4. In the resulting dialog, on the first tab choose a name of your choice (Spaak sounds like a reasonable name)
5. On the second tab, enter `db` as Host name/address, `spaak` as Maintenance database, `headbendover` as Username and `raisetheposterior` as Password
6. Click Apply and you should be connected to the database.
