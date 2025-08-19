import Joi from "joi";
const coords = Joi.number().min(-180).max(180);

const schoolSchema = Joi.object({
  body: Joi.object({
    name: Joi.string().min(5).max(100).required(),
    address: Joi.string().min(10).max(200).required(),
    longitude: coords.required(),
    latitude: coords.required(),
  }),
  query: Joi.object({}),
  params: Joi.object({}),
});

const listSchoolSchema = Joi.object({
  query: Joi.object({
    lat: Joi.number().min(-90).max(90).required(),
    lng: Joi.number().min(-180).max(180).required(),
    limit: Joi.number().integer().min(1).max(500).default(100),
    offset: Joi.number().integer().min(0).default(0),
    unit: Joi.string().valid("km", "mi").default("km"),
  }),
  body: Joi.object({}),
  params: Joi.object({}),
});

export  {
  schoolSchema,
  listSchoolSchema,
};
