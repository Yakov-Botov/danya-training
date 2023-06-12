import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import * as path from "path";

const app = express();

// Apply middlware for CORS and JSON endpoing
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const requests = []

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', '/index.html'))
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', '/about.html'))
})

app.get('/data', (req, res) => {
  requests.push(requests.length + 1)
  res.send({data: {requests}});
})

app.listen(3000, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
