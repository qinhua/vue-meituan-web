import Router from 'koa-router'
import Redis from 'koa-redis'
import nodeMailer from 'node-mailer'
import Users from '../dbs/models/users'
import Passport from './utils/passport'
import Email from '../dbs/config'
import Axios from './utils/axios'