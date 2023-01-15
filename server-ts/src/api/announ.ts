import Router from "koa-router"
const router = new Router()
router.get('/anoun', async ctx =>{
    ctx.body= [
        {id: 1,topic: '240-124 Midterm 2/2565', descrition: 'คะแนนสอบกลางภาควิชา Web Designer and Developer Module',
    datetime: '2023-01-20 10:00:00', userC: 'Wannasak.psu'}
    ]
})

export default router