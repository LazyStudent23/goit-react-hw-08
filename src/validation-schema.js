import * as Yup from 'yup';

const NumberRegex = /^\s*\d{3}-\d{2}-\d{2}\s*$/gm;

export const AddContactSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be up to 50 characters'),

  number: Yup.string()
    .required('Number is required')
    .matches(NumberRegex, 'Required format: XXX-XX-XX'),
});