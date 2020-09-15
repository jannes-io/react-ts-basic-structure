import React from 'react';
import { match as Match } from 'react-router-dom';
import { Typography } from '@material-ui/core';

interface IExampleContainerProps {
  match?: Match<{ param: string }>;
}

const ExampleContainer: React.FC<IExampleContainerProps> = ({ match }) => <div>
  <Typography>This is an example container!</Typography>
  {match?.params.param && <Typography>{`Param value is ${match.params.param}`}</Typography>}
</div>;

export default ExampleContainer;
