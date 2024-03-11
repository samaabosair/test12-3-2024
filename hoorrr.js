const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === `/`) {
    res.end(`welcome to our home page`);
  } else if (req.url === `/about`) {
    res.end(`here is our short history`);
  }
  res.end(`Oops`);
});

server.listen(5000);
