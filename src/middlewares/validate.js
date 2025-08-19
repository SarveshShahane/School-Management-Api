import Joi from "joi";


const validate = (schema) => async (req, res, next) => {
  const toValidate = {
    body: req.body,
    query: req.query,
    params: req.params,
  };
  const { error, value } = schema.validate(toValidate, {
    abortEarly: false,
    stripUnknown: true,
  });
  if (error) {
    const err = new Error("Validation failed");
    err.status = 400;
    err.code = "VALIDATION_ERROR";
    err.details = error.details.map((d) => ({
      message: d.message,
      path: d.path,
    }));
    return next(err);
  }
  req.body = value.body || req.body;
  next();
};

export default validate;
