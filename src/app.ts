import express, { Request, Response } from "express";
import deneme from "./deneme";

const app = express();

app.get("/", (req: Request, res: Response) => {
  deneme();
  res.json({ deneme: "json" });
});

app.listen(4000, () => console.log("Server çalışıyor..."));
