import Router from 'koa-router'
import announ from './announcement'
import userResult from './user_result'
import { authMiddleware } from 'auth'

const apiRouter = new Router()

apiRouter.use('/api/announ',authMiddleware,announ.routes())
apiRouter.use('/api/userResult',authMiddleware,userResult.routes())

export default apiRouter