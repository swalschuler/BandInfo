import React from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection } from './common';

const needCars = (carValue) => {
  if (carValue === '') {
    return <Text>No cars</Text>;
  } 
  return <Text>Need cars</Text>;
};

const ScheduleItem = ({ event }) => {
  return (
    <Card>
      <CardSection> 
        <Text style={styles.eventNameTextStyle}>{event[2]}</Text>
      </CardSection>

      <CardSection>
        <Text>{event[1]} {event[0]} at {event[3]}</Text>
      </CardSection>

      <CardSection> 
        {needCars(event[4])}
      </CardSection>

      <CardSection>
        <Text>{event[5]}</Text>
      </CardSection>

    </Card>
  );
};

const styles = {
  eventNameTextStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  }
};

export default ScheduleItem;
