import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection } from './common';

class EmailItem extends Component {
  
  onRowPress() {
    Actions.emailDisplay({ email: this.props.email, title: this.props.email.subject });
  }

  render() {
    return (
      <TouchableOpacity onPress={this.onRowPress.bind(this)}>
        <View>
          <Card>
            <CardSection>
              <Text style={styles.subjectStyle}>{this.props.email.subject}</Text>
            </CardSection>

            <CardSection>
              <Text>{this.props.email.from[0]}</Text>
            </CardSection>

          </Card>
        </View>
      </TouchableOpacity>
    );
  }

}

const styles = {
  subjectStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
};

export default EmailItem;
