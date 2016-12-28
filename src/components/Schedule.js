import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';
import { Card, CardSection } from './common/';

class EmailList extends Component {
  render() {
    return (
      <View >
        <Card>
          <CardSection><Text>Test</Text></CardSection>
        </Card>
      </View>
    );
  }
}

const styles = {
  container: {
    //paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight
  }
};

export default EmailList;
