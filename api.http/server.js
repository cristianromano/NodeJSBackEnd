const http = require("http");

const server = http.createServer((req, res) => {
  const { url, method } = req;

  switch (method) {
    case "GET":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Hello GET!");
      break;

    case "POST":
      res.end("Hello POST!");
      break;

    default:
      res.end("No existe!");
      break;
  }
});

server.listen(3000, () => {
  console.log("Server running at port 3000");
});
