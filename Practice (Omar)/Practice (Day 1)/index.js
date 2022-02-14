const express = require('express');
const logger = require('./middleware/logger');
const PORT = process.env.PORT || 5000;
const app = express();




//Init middleware
//app.use(logger);

//Body parser
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//Member API
app.use('/members/member', require('./routes/api/member'));





app.listen(PORT, () => {
    console.log(`Server running Successfully on port ${PORT}`)
});