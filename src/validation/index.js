import * as yup from 'yup';

export const REGISTRATION_SCHEMA = yup.object({
  email: yup.string().email().required(),
  password: yup.string().matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!#$%_-]).{8,32}$/, 'Password must be normal').required(),
  nickname: yup.string().matches(/^[A-Za-z]\w{7,63}$/, 'Nickname must start with letter and be 8 - 64 symbols').required(),
  isSubscribed: yup.boolean().required(),
  gender: yup.string(),
  country: yup.string(),
  comment: yup.string(),
});