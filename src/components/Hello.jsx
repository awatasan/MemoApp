import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string } from 'prop-types';
import { bool } from 'prop-types';
import { shape } from 'prop-types';

function Hello(props) {
  const { children, bang, style } = props;
  return (
    <View>
      <Text style={[styles.text, style]}>
        {`Hello ${children}${bang ? '!' : ''}`}
      </Text>
    </View>
  );
}

Hello.propTypes = {
  children: string.isRequired,
  bang: bool,
  style: null,
};

Hello.defaultProps = {
  bang: false,
};

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 48,
    fontWeight: 'bold',
    padding: 16,
  },
});
export default Hello;
