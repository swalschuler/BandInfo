import React, { Component } from 'react';
import { View, Text, WebView, Navigator } from 'react-native';
import HTMLView from 'react-native-htmlview';

const htmlCode = "<b>I am rendered in a <i>WebView</i></b>";


class Email extends Component {
  render() {
    return (
        <WebView 
          style={{ paddingBottom: Navigator.NavigationBar.Styles.General.NavBarHeight }}
          ref={'webview'}
          automaticallyAdjustContentInsets={false}
          source={{ html: this.props.email.body }}
          dataDetectorTypes='phoneNumber'
        />
    );
  }
}

export default Email;

