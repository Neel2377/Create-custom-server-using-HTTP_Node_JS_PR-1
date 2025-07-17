const http = require('http');
const fs = require('fs');
const PORT = 3000;

const requestHandler = (req, res) => {
    let filename = '';

    switch (req.url) {
        case '/':
            filename = "index.html";
            break;
        case '/about':
            filename = "about.html"
            break;
        case '/contact':
            filename = "contact.html"
            break;
        default:
            filename = "404.html";
    }
    fs.readFile(filename, (err, result) => {
        if (!err) {
            res.end(result);
        }
        else {
            res.end('404 not found')
        }
    })
}

const server = http.createServer(requestHandler);

server.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("server starts on port: ", PORT);
    }
})