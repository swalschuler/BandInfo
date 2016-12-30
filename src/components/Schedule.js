import React, { Component } from 'react';
import { ListView, Text, View, Navigator } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Card, CardSection } from './common/';
import { fetchSchedule } from '../actions';
import ScheduleItem from './ScheduleItem';

class EmailList extends Component {
  componentWillMount() {
    this.props.fetchSchedule();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ schedule }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(schedule);
  }

  renderRow(scheduleEvent) {
    return <ScheduleItem event={scheduleEvent} />;
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

const styles = {
  container: {
    //paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight
  }
};

const mapStateToProps = (state) => {
  const schedule = _.map(state.schedule, (val, uid) => {
    return { ...val, uid };
  });
  return { schedule };
};

export default connect(mapStateToProps, { fetchSchedule })(EmailList);
