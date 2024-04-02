import HttpError from "./HttpError.js";

const validateBody = (schema) => {
  const func = (req, _, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      const validationError = HttpError(400, "Помилка від Joi або іншої бібліотеки валідації");
      next(validationError);
    } else {
      next();
    }
  };

  return func;
};

export default validateBody;


