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
  /*检查验证码*/
  if (code) {
    const saveCode = await Store.hget(`nodemail:${username}`, 'code')
    const saveExpire = await Store.hget(`nodemail:${username}`, 'expired')
    if (code === saveCode) {
      if (new Date().getTime - saveExpire > 0) {
        ctx.body = {
          code: -1,
          msg: '验证码失效，请重新获取'
        }
        return false
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '验证码错误'
      }
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '请填写验证码'
    }
  }
  /*检查用户名*/
  let user = await User.find({ username })
  if (user) {
    ctx.body = {
      code: -1,
      msg: '用户名已存在'
    }
  } else {
    let newUser = await User.set({ username, email, code })
    if (newUser) {
      router.post('/signup', async ctx => {
        ctx.body = {
          code: 0,
          msg: '注册成功'
        }
      })
    } else {
      ctx.body = {
        code: -1,
        msg: '注册失败'
      }
    }
  }
})

export default router
