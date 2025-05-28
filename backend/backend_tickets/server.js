const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/tkt', require('./routes/tktRoutes'));


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor backend tkt corriendo en puerto ${PORT}`);
});
