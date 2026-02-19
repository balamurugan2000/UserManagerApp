// UserDetailScreen.test.tsx

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import UserDetailScreen from '../src/screens/user/UserDetails';
import { Alert } from 'react-native';

jest.mock('../src/components/CustomHeader', () => (props: any) => (
  <>{props.title && <>{props.title}</>}</>
));

jest.mock('../src/utils/validation', () => ({
  validateUserForm: jest.fn(() => ({})),
}));

jest.mock('../src/screens/user/components/FormInput', () => {
  const React = require('react');
  const { TextInput } = require('react-native');
  return function MockFormInput(props: any) {
    return (
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        testID={props.testID || props.label}
      />
    );
  };
});

jest.mock('../src/navigation/NavigationService', () => ({
  goBack: jest.fn(),
}));

const mockUser = {
  id: 1,
  name: 'John Doe',
  username: 'johndoe',
  email: 'john@mail.com',
  phone: '123456789',
  website: 'john.com',
  address: {
    street: 'Main St',
    suite: 'Apt 1',
    city: 'NY',
    zipcode: '10001',
    geo: {
      lat: '10.0',
      lng: '20.0',
    },
  },
  company: {
    name: 'ABC Corp',
    catchPhrase: 'We build',
    bs: 'business',
  },
};

describe('UserDetailScreen', () => {
  const route = {
    params: {
      user: mockUser,
    },
  } as any;

  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(Alert, 'alert').mockImplementation(jest.fn());
  });

  it('renders user details correctly', () => {
    const { getByText } = render(<UserDetailScreen route={route} />);
    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('@johndoe')).toBeTruthy();
    expect(getByText('john@mail.com')).toBeTruthy();
  });

  it('enters edit mode when Edit Profile pressed', () => {
    const { getByText } = render(<UserDetailScreen route={route} />);
    fireEvent.press(getByText('Edit Profile'));
    expect(getByText('Save')).toBeTruthy();
    expect(getByText('Cancel')).toBeTruthy();
  });

  it('calls save and shows success alert', async () => {
    const { getByText } = render(<UserDetailScreen route={route} />);
    fireEvent.press(getByText('Edit Profile'));
    fireEvent.press(getByText('Save'));
    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith(
        'Success',
        'User updated successfully',
      );
    });
  });

  it('cancel button exits edit mode', () => {
    const { getByText, queryByText } = render(<UserDetailScreen route={route} />);
    fireEvent.press(getByText('Edit Profile'));
    fireEvent.press(getByText('Cancel'));
    expect(queryByText('Save')).toBeNull();
  });

  it('shows geo location', () => {
    const { getByText } = render(<UserDetailScreen route={route} />);
    expect(getByText('10.0, 20.0')).toBeTruthy();
  });

  it('shows company info', () => {
    const { getByText } = render(<UserDetailScreen route={route} />);
    expect(getByText('ABC Corp (We build)')).toBeTruthy();
  });

  it('edits name field', () => {
    const { getByText, getByTestId } = render(<UserDetailScreen route={route} />);
    fireEvent.press(getByText('Edit Profile'));
    const nameInput = getByTestId('Name');
    fireEvent.changeText(nameInput, 'Jane Doe');
    expect(nameInput.props.value).toBe('Jane Doe');
  });

  it('edits address fields', () => {
    const { getByText, getByTestId } = render(<UserDetailScreen route={route} />);
    fireEvent.press(getByText('Edit Profile'));
    const streetInput = getByTestId('Street');
    fireEvent.changeText(streetInput, 'Elm St');
    expect(streetInput.props.value).toBe('Elm St');
  });

  it('edits company fields', () => {
    const { getByText, getByTestId } = render(<UserDetailScreen route={route} />);
    fireEvent.press(getByText('Edit Profile'));
    const companyInput = getByTestId('Company Name');
    fireEvent.changeText(companyInput, 'XYZ Inc');
    expect(companyInput.props.value).toBe('XYZ Inc');
  });

  it('shows validation errors', async () => {
    const { getByText } = render(<UserDetailScreen route={route} />);
    const { validateUserForm } = require('../src/utils/validation');
    validateUserForm.mockReturnValueOnce({ name: 'Required' });
    fireEvent.press(getByText('Edit Profile'));
    fireEvent.press(getByText('Save'));
    await waitFor(() => {
      expect(getByText('Save')).toBeTruthy();
    });
  });
});