import { User } from '../screens/User/types';

export type EditableUserField = 'name' | 'email' | 'phone' | 'website';

export type ValidationErrors = Partial<Record<EditableUserField, string>>;

export const validateUserForm = (user: User): ValidationErrors => {
  const errors: ValidationErrors = {};

  if (!user.name?.trim()) {
    errors.name = 'Name is required';
  }

  if (!user.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/^\S+@\S+\.\S+$/.test(user.email)) {
    errors.email = 'Invalid email format';
  }

  if (!user.phone?.trim()) {
    errors.phone = 'Phone is required';
  }

  if (!user.website?.trim()) {
    errors.website = 'Website is required';
  }

  return errors;
};
