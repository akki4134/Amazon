import Joi from 'joi'

export const registerValidation = (data) => {

    const schema = Joi.object({

        name: Joi.string()
            .alphanum().min(4).max(30).required(),

        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .required(),

        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

        phonenumber: Joi.string()
            .length(10).pattern(/^[0-9]+$/).required()
    });

    return schema.validate(data)
}

export const loginValidation = data => {

    const schema = Joi.object({

        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    });

    return schema.validate(data)
}