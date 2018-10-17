import t from 'tcomb-form-native';

const EmailType = t.subtype(t.Str, (email) => {
  return email === 'xxx';
});

EmailType.getValidationErrorMessage = function (value, path, context) {
  console.log(value);
  console.log(path);
  console.log(context);
  return 'email is invalid';
};

const tFormType = {
  email: EmailType
};
export default tFormType;