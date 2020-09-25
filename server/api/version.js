const router = require('express').Router()
const {Version} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const versions = await Version.findAll({
      attributes: ['id', 'versionNumber1', 'versionNumber2']
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

router.delete('/:id', async (req, res, next) => {
  try {
    await Version.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(204).end()
  } catch (error) {
    next(error)
  }
})
