import Router from 'koa-router'

const router = new Router()
router.prefix('/api')

router.get('/')
router.get('/users')

export default router