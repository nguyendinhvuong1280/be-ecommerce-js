'use strict'
const AccessService = require('../services/access.service')

class AccessController {
    signUp = async (req, res, next) => {
        try {
            console.log(`[P]::signUp::`, req.boby)
            return res.status(201).json(await AccessService.signUp(req.boby))
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new AccessController()