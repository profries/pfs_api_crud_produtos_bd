const express = require('express')
const app = express()
const port = 3000


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const produtoRota = require('./rotas/produto_rota');
app.use('/api/produtos', produtoRota);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
