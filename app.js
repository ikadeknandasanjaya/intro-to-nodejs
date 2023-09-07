const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000


// gunakan ejs
app.set('view engine', 'ejs')
app.use(expressLayouts)

// Route
// root 
app.get('/', (req, res) => {

  const mahasiswa = [
    // {
    //   nama : 'Nanda Sanjaya',
    //   email : 'nandasanjaya@gmail.com',
    // },
    // {
    //   nama : 'Puli Sanjaya',
    //   email : 'pulisanjaya@gmail.com',
    // },
    // {
    //   nama : 'Sari Sanjaya',
    //   email : 'sarisanjaya@gmail.com',
    // }
  ];

//   res.send('Hello World!')
// res.json({
//     "Nama" : "Nanda",
//     "Jurusan" : "TI",
// })
// res.sendFile('./index.html', {root : __dirname})

res.render('index', {
  nama : 'Nanda', 
  title : 'Ayam',
  mahasiswa,
  layout : 'layouts/main-layout'
})
  
})


app.get('/about', (req, res) => {

//   res.send('Ini adalah halaman about')
// res.sendFile('./about.html', {root : __dirname})

res.render('about', {
  layout : 'layouts/main-layout',
  title : 'Halaman About'
})


})

app.get('/contact', (req, res) => {
//   res.send('Ini adalah halaman contact')
// res.sendFile('./contact.html', {root : __dirname})

res.render('about', {
  layout : 'layouts/main-layout',
  title : 'Halaman Contact'
})

})

app.get('/product/:id', (req, res) => {
    res.send(`Product ID :  ${req.params.id} <br> Category ID : ${req.query.category} `)
})

app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1>404</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})







// const http = require('http')
// const port = 3000
// const fs = require('fs')

// const renderHtml = (path, res) => {
//     fs.readFile(path, (err, data) => {
//         if(err) {
//             res.writeHead(404)
//             res.write('Erorr file not found')
//         } else {
//             res.write(data)
//         }
//     res.end()
//     })   
// }

// http
//     .createServer((req, res) => {
//         res.writeHead(200,{
//             'Content-Type' : 'text/html'
//         })
//         const url = req.url
//         if(url === '/about') {
//             renderHtml('./about.html', res)
//         }
//         else if(url === '/contact') {
//             res.write('<h1>Ini Adalah Halaman Contact</h1>')
//         } else {
//             renderHtml('./index.html', res)
//         }
//     })
//     .listen(port, () => {
//     console.log(`Listening on port ${port}`)
// })

