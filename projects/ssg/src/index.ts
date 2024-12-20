import app from 'app'
import { toSSG } from 'hono/ssg'
import fs from 'fs/promises'

const result = await toSSG(app, fs)
console.log(result)
