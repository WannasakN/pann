import Router from 'koa-router'
import announ from './announcement'
import userResult from './user_result'

const apiRouter = new Router()

apiRouter.use('/api/announ',announ.routes())
apiRouter.use('/api/userResult',userResult.routes())

export default apiRouter