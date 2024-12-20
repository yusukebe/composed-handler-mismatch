import { Hono } from 'hono'

const subApp = new Hono()

subApp.get('/', (c) => c.html('Hi'))
subApp.onError((_e, c) => c.html('Error', 500))

const app = new Hono()
app.route('/', subApp)

export default app
