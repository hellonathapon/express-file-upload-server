const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Setup view engine
app.set('view engine', 'ejs');



app.listen(port, () => console.log(`Server is running on port ${port}`));