const router = require('express').Router()
const {Version} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const versions = await Version.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'versionNumber']
    })
    res.json(versions)
  } catch (err) {
    next(err)
  }
})
