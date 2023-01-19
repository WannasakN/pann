import Koa from 'koa'
import json from 'koa-json'
import apiRouter from './api'
import { koaBody } from 'koa-body'

const app = new Koa()

app.use(json())
app.use(koaBody())
app.use(apiRouter.routes())

app.listen(8000)

