import React from 'react';
import { Text, Navigator } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import EmailList from './components/EmailList';
import Schedule from './components/Schedule';

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
  );
};

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        {/* Tab Container */}
        <Scene 
          key="tabbar"
          tabs
          tabBarStyle={{ backgroundColor: '#FFFFFF' }}
        >
          {/* Tab and it's scenes */}
          <Scene key="email" title="Email" icon={TabIcon}>
            <Scene 
              sceneStyle={{ paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight }}
              key="email_list"
              component={EmailList}
              title="Emails"
            />

            {/* Can use this to add other stuff later */}
            <Scene 
              sceneStyle={{ paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight }}
              key="gray"
              component={Schedule}
              title="Gray"
            />
          </Scene>

          {/* Tab and it's scenes */}
          <Scene key="schedule" title="Schedule" icon={TabIcon}>
            <Scene
              sceneStyle={{ paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight }}
              key="schedule_list"
              component={Schedule}
              title="Schedule"
            />
            <Scene
              sceneStyle={{ paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight }}
              key="maize"
              component={EmailList}
              title="Maize"
            />
          </Scene>

        </Scene>
      </Scene>
    </Router>
  );
};
//      <Scene key='email' component={EmailList} title='Emails' />

export default RouterComponent;
