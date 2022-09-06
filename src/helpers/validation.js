let required = (val) => (val ? null : "The field is required");

let maxLength = (length) => (val) =>
  val.length > length ? `Task content can contain max ${length} characters.` : null;

let createValidation = (validations) => (val) => {
  for (let validation of validations) {
    const error = validation(val);

    if (error) {
      return error;
    }
  }

  return "";
};

export const validateAddField = createValidation([maxLength(54), required]);
