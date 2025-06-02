// Include Node.js HTTP module
const http = require('http');

// Set port
const port = 3000;

// Create server, deal with requests/responses
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  switch (req.url) {
    case '/':
      res.statusCode = 200;
      res.end('<h1>Welcome to Selomea Beyenes Home Page</h1><p>Please add interesting info here.</p>');
      break;

    case '/about':
      res.statusCode = 200;
      res.end('<h1>Welcome to Selomea Beyenes About Page</h1><p>Please add interesting info here.</p>');
      break;

    default:
      res.statusCode = 404;
      res.end('<h1>File Not Found</h1><p>Please add interesting info here.</p>');
      break;
  }
});

//Set server to listen fov requests
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

