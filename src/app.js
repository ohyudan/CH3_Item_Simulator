import express from "express";
import usersrouter from "../Router/users.router";
import itemrouter from "../Router/item.router";
import expressSession from "express-session";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = 3000;

app.use(express.json());
const MySQLStore = expressMySQLSession(expressSession);
const seesionStore = new MySQLStore({
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE_NAME,
  expiration: 1000 * 60 * 60 * 12,
  createDatabaseTable: true,
});
app.use(
  expressSession({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(`/api`[(usersrouter, itemrouter)]);

app.get(`/`, (req, res) => {
  res.send(`test`);
});

app.listen(PORT, () => {
  console.log(`${PORT}으로 서버 연결`);
});
