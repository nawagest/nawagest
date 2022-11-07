const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const dir = `${__dirname}/public/html`;

app.get('/', (req, res) => {
    res.sendFile(`${dir}/index.html`);
});

app.get('/about', (req, res) => {
    res.sendFile(`${dir}/about.html`);
});

app.get('/blog', (req, res) => {
    res.redirect('https://blognat.herokuapp.com')
})

app.get('/projects', (req, res) => {
    res.sendFile(`${dir}/projects.html`);
});

app.get('/resume', (req, res) => {
    res.sendFile(`${__dirname}/public/html/resume.html`);
});

app.get('/contact', (req, res) => {
    res.sendFile(`${dir}/contact.html`)
});

app.get('*', (req, res) => {
    res.sendFile(`${dir}/404.html`);
})

app.listen(process.env.PORT || 3000, () => console.log('server started on port 3000'));