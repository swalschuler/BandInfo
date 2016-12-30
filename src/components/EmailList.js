import React, { Component } from 'react';
import { ListView, Text, Navigator, View } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchEmails } from '../actions';
import EmailItem from './EmailItem';

class EmailList extends Component {
  
  componentWillMount() {
    this.props.fetchEmails();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ emails }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(emails);
  }

  renderRow(email) {
    return <EmailItem email={email} />;
  }

  render() {
    return (
      <View style={{ paddingBottom: Navigator.NavigationBar.Styles.General.NavBarHeight }}>
        <ListView 
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const tempEmails = _.map(state.emails, (val, uid) => {
    return { ...val, uid };
  });
  console.log(tempEmails);
  _.reverse(tempEmails);
  return { emails: tempEmails };
};

export default connect(mapStateToProps, { fetchEmails })(EmailList);
