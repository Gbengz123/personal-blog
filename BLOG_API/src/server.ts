import express from 'express';
if (process.env.NODE_ENV !== 'production') {
  await import('dotenv/config');
}
import adminRouter from './routes/admin/index.js';
import userRouter from './routes/users/index.js';
import errorHandler from './middleware/errorHandler.js';
import { urlencoded } from 'express';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(urlencoded({ extended: true }));

app.use('/api/admin', adminRouter);
app.use('/api/', userRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Page Not found' });
});

app.use(errorHandler);

app.listen(PORT, (e) => {
  if (e) {
    console.error(e);
    return;
  }
  console.log(`Server is running on port ${PORT}`);
});

