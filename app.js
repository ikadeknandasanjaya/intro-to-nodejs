const http = require('http')
const port = 1234
const fs = require('fs')

const renderHtml = (path, res) => {
    fs.readFile(path, (err, data) => {
        if(err) {
            res.writeHead(404)
            res.write('Erorr file not found')
        } else {
            res.write(data)
        }
    res.end()
    })   
}

http
    .createServer((req, res) => {
        res.writeHead(200,{
            'Content-Type' : 'text/html'
        })
        const url = req.url
        if(url === '/about') {
            renderHtml('./about.html', res)
        }
        else if(url === '/contact') {
            res.write('<h1>Ini Adalah Halaman Contact</h1>')
        } else {
            renderHtml('./index.html', res)
        }
    })
    .listen(port, () => {
    console.log(`Listening on port ${port}`)
})