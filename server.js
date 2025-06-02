// Include Express
const express = require('express');

// Set port
const port = 3000;

const app = express();

app.get('/',(req,res)=>{
    res.send(`
    <h1>Here's Selomea's home page</h1>
    <p>Welcome to Express!</p>
`);
}); 

app.get('/about',(req,res)=>{
    res.send(`
    <h1>Here's Selomea's Express About Page</h1>
    <p>Welcome to Express!</p>
`);
}); 


//Set server to listen fov requests
app.listen(port, () => {
  console.log(`Server running at pot: ${port}`);
});

