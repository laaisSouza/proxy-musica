import express from "express";
import fetch from "node-fetch";
import cors from "cors";
const app = express();
app.use(cors());

app.get("/deezer", async (req, res) => {
  const q = req.query.q;
  if (!q) return res.json({ data: [] });
  const url = `https://api.deezer.com/search/track?q=${encodeURIComponent(q)}`;
  const resp = await fetch(url);
  const data = await resp.json();
  res.json(data);
});

const port = process.env.PORT || 10000;
app.listen(port, () => console.log("Proxy rodando na porta " + port));
