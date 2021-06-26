const express = require('express');

const app = express();
app.use(express.json());

//app.get('/hello', (req, res) => res.send('Hello World!'));


require('./routers/product.routes')(app);
require('./routers/category.routers')(app);


app.listen(8080, () => console.log('Example app listening on port 8080!'));