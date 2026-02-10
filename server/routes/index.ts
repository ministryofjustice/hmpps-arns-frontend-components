import { Router } from 'express'
import { activateMojNav } from '../utils/navHelper'
import rawNavSections from '../data/navData'
import rawNewNavSections from "../data/newNavData";

export default function routes(): Router {
  const router = Router()

  router.get('/', async (req, res, next) => {
    const navSections = activateMojNav(rawNavSections, '/')
    return res.render('pages/index', { navSections })
  })

  router.get('/new', async (req, res, next) => {
    const navSections = activateMojNav(rawNewNavSections, '/new')
    return res.render('pages/newIndex', { navSections })
  })

  return router
}
