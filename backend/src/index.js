import express from 'express';
import authRoutes from './routes/auth.route.js';


const app = express();
const PORT = process.env.PORT || 3000;

app.use('/auth', authRoutes);


// Log every request for debugging
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});


app.get('/', (req, res) => {
  res.send('Backend is active!');
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
