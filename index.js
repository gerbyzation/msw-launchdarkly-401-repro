const LaunchDarkly = require('launchdarkly-node-server-sdk')
const msw = require('msw/node')

const server = msw.setupServer()

server.listen()

const client = LaunchDarkly.init(process.env.LAUNCHDARKLY_SDK_KEY, { stream: true })