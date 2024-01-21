import express, { Request, Response } from "express";

const app = express();
const PORT = 6000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Kubernetes with Traefik Testing!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});