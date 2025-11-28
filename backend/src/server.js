import express from 'express';
import cors from 'cors';
// import mockedData from '../mocked/mockedData.ts';

const app = express();

app.use(express.json());
const allowedOrigin = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

app.use(cors({ origin: allowedOrigin }));
app.use(express.json());

const mockedData = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
];

app.get('/', (req, res) => {
  res.send(mockedData);
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
