import React, { ReactElement } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import CardA from '@src/components/CardA';
import CardB from '@src/components/CardB';

const App = (): ReactElement => (
  <Switch>
    <Route path="/a">
      <CardA
        title="우리의개꿈"
        content="화성갈끄니까"
        date={new Date()}
        type="BLUE"
        emotion="ANGRY"
        youtubeInfo={{
          link: 'https://youtu.be/Ih4xoL9KqOE',
          title: '코인 퉤 - 우리의 개꿈',
          thumbnail:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPud2uX3576yqQ7Pz4vCfn2gLyxDA0cEX8Q&usqp=CAU',
          playTime: 0,
        }}
      />
    </Route>
    <Route path="/b">
      <CardB
        title="우리의개꿈"
        content="화성갈끄니까"
        date={new Date()}
        type="BLUE"
        emotion="ANGRY"
        youtubeInfo={{
          link: 'https://youtu.be/Ih4xoL9KqOE',
          title: '코인 퉤 - 우리의 개꿈',
          thumbnail:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPud2uX3576yqQ7Pz4vCfn2gLyxDA0cEX8Q&usqp=CAU',
          playTime: 0,
        }}
      />
    </Route>
    <Redirect from="*" to="/a" />
  </Switch>
);

export default App;
