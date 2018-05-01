import React, { Component } from 'react';
import { ImageBackground, ScrollView } from 'react-native';
import { Container, Icon, View, Form } from 'native-base';
import PhoneInput from 'react-native-phone-input';
import I18n from '../../locales';
import { primaryColor, backgroundColor, contrastColor, primaryFont } from '../../theme';
import { Button, Text } from '../../components/common';

class VerificationScreen extends Component {
  state = {
    mobileNumber: '',
    loading: false,
    step: 1,
  }

  onContinuePress = () => {
    this.setState({ isLoading: true });
    console.log('Loading verification....');
  }

  onBackPress = () => {
    this.props.navigator.pop();
  }

  render() {
    return (
      <Container id="Verification.container" style={{ backgroundColor: 'red' }}>
        <ImageBackground
          id="SignUp.bg-image"
          resizeMode="cover"
          style={styles.background}
          source={require('../../images/loginBackground.png')}
        >
        <ScrollView>
          <View id="Signup.backButtonAndTitleWrapper" style={styles.header}>
            <Button
              id="Signup.backButton"
              style={{ flex: 1 }}
              transparent
              onPress={this.onBackPress}
            >
              <Icon style={{ color: 'white', fontSize: 40 }} name="ios-arrow-back" />
            </Button>
            <Text
              id="Verification.titleText"
              style={{ color: contrastColor, fontSize: 25, flex: 1.6, ...primaryFont }}
            >
              Register
            </Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.titleText}>Mobile number</Text>
            <Form>
              <View style={styles.inputConteiner}>
                <PhoneInput style={styles.input} textStyle={styles.inputTextStyle}/>
              </View>
            </Form>
            <Button
              id="Verification.submitButton"
              block
              style={styles.button}
              onPress={
                this.state.step === 1
                  ? this.onContinuePress
                  : this.handleSubmit
              }
              spinner={this.state.isLoading}
            >
              <Text style={styles.buttonText}>
                {I18n.t('common.continue')}
              </Text>
            </Button>
          </View>
          </ScrollView>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = {
  header: {
    flex: 0.1,
    justifyContent: 'flex-start',
    top: 20,
    flexDirection: 'row',
  },
  background: {
    flex: 1,
    height: null,
    width: null,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
  },
  contentContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 22,
    color: 'white',
  },
  inputConteiner: {
    margin: 50,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    borderColor: 'gray',
  },
  inputTextStyle: {
    fontSize: 18,
    color: 'white',
  },
  button: {
    margin: 5,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#f3c200',
  },
  buttonText: {
    color: 'red',
  },
};


export default VerificationScreen;

