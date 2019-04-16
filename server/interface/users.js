import Router from 'koa-router'
import Redis from 'koa-redis'
import nodeMailer from 'node-mailer'
import Users from '../dbs/models/users'
import Passport from './utils/passport'
import Email from '../dbs/config'
import Axios from './utils/axios'

let router = new Router({
  prefix: '/user'
})

let Store = new Redis().client

router.post('/signup', async ctx => {
  const { username, password, email, code } = ctx.request.body

})
