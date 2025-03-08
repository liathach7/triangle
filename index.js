const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', async (request, response) => {

    response.sendFile(__dirname + '/home.html');

});

app.post('/',function(request,response){
    let sum = Number(request.body.num1) + Number(request.body.num2)
    response.send('<p>Result :' + sum + '</p>')
})

app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))