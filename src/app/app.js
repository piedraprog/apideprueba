import express from "express";
import morgan from 'morgan';
import cors from 'cors';

import indexrutes from "./routes/routes";

const app = express();

//settings
// este va primero
app.set("port", process.env.PORT || 4000);


// middlewares
app.use(cors({}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}))


//ROUTES
app.get("/", (req, res) => {
  res.json({ message: "api de prueba" });
});

app.use(indexrutes);

export default app;
