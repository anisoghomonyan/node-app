const { Pool, Client } = require('pg')
const express = require('express')

const app = express()

app.use(express.static('public'));

app.listen(3000, () => console.log('Example app listening on port 3000!'))


// const client = new Client({
// 	user: 'anisoghomonyan',
// 	host: 'localhost',
// 	database: 'nodeapp',
// 	password: 'nodeapp',
// 	post: 5432
// })

// client.connect()

// client.query('SELECT $1::text as message', ['Hello world!'], (err, response) => {
// 	console.log(response.rows[0].message)
// 	client.end()
// })
