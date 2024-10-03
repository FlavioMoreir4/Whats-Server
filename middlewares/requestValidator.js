import { validationResult } from 'express-validator'
// import pkg from 'express-validator'
import response from './../response.js'

// const { validationResult } = pkg

const validate = (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return response(res, 400, false, 'Please fill out all required input.')
    }

    next()
}

export default validate
