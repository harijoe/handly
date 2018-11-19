const middy = require('middy')
const mdd = require('middy/middlewares')
const failSafe = require("./lib/failSafe")
const normalizedResponse = require("./lib/normalizedResponse")

const handly = handler => {
  return middy(failSafe(handler))
    .use(mdd.httpEventNormalizer())
    .use(mdd.httpHeaderNormalizer())
    .use(mdd.jsonBodyParser())
    .use(mdd.urlEncodeBodyParser())
    .use(normalizedResponse());
}

module.exports = handly
