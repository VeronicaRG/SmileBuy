import React from 'react';

import { fireEvent, render } from '@testing-library/react-native';

import Theme from '../../theme';
import Button from './index';

import 'jest-styled-components';

describe('Button', () => {
  it('renders correctly', () => {
    const { toJSON } = render(
      <Theme>
        <Button title="teste" />
      </Theme>,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('should call onPress when the button was pressed', () => {
    const fnMock = jest.fn();
    const { getByTestId } = render(
      <Theme>
        <Button title="teste" onPress={fnMock} testID={'btn_test'} />
      </Theme>,
    );

    const touchable = getByTestId('btn_test');
    fireEvent.press(touchable);

    expect(fnMock).toBeCalled();
  });
});
