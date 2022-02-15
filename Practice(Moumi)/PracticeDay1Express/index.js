const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const logger = require('./Middleware/logger');

//Init middleware
//app.use(logger);

//Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/member/API', require('./routes/api/member'));

app.listen(PORT, () => console.log(`Server running Successfully on port ${PORT}`));