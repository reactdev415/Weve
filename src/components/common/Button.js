import React from 'react';
import PropTypes from 'prop-types';
import { Button as BaseButton, Spinner, Text } from 'native-base';
import { primaryFont, contrastColor } from '../../theme';

const Button = (props) => {
  const { transparent, style, spinner, children, textStyle } = props;

  const childText = typeof children === 'string';

  const innerTextStyle = {
    ...textStyle,
    ...primaryFont,
    color: 'white',
  };

  return (
    <BaseButton
      block
      rounded
      {...props}
      textStyle={childText ? innerTextStyle : null}
      style={[
        {
          backgroundColor: transparent ? null : '#D64635',
          flexDirection: 'column',
        },
        style,
      ]}
    >
      {spinner ? (
        <Spinner color={contrastColor} />
      ) : childText ? (
        <Text style={{ ...innerTextStyle }}>{children}</Text>
      ) : (
        children
      )}
    </BaseButton>
  );
};

Button.propTypes = {
  ...BaseButton.PropTypes,
  spinner: PropTypes.bool,
  textStyle: PropTypes.object,
};

export default Button;
