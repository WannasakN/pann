import Koa from 'koa'
import json from 'koa-json'
import api from './api/announ'

const app = new Koa()
app.use(json())
app.use(api.routes())

app.listen(3000)

