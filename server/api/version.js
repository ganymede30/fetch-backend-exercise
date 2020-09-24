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

router.get('/:id', async (req, res, next) => {
  try {
    const version = await Version.findByPk(req.params.id)
    if (!version) {
      res.sendStatus(404)
    }
    res.status(200).json(version)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newVersionNumber = await Version.create(req.body)
    if (!newVersionNumber) {
      res.sendStatus(404)
    }
    res.status(200).json(newVersionNumber)
  } catch (error) {
    next(error)
  }
})
