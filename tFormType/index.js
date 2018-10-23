import t from 'tcomb-form-native';

const EmailType = t.subtype(t.Str, (email) => {
  return email === 'xxx';
});

EmailType.getValidationErrorMessage = function (value, path, context) {
  return 'email is invalid';
};

const tFormType = {
  email: EmailType
};
export default tFormType;