import React from 'react';
import { RouteMap } from '../../Routes';
import Divider from '@material-ui/core/Divider';
import {
  ListItem,
  ListSubheader,
  List,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = makeStyles((theme: Theme) => createStyles({
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
}));

const DrawerItemList: React.FunctionComponent<{
  routes: RouteMap,
}> = ({ routes }) => {
  const classes = styles();

  return <>
    {Object.values(routes).filter(section => !section.hidden).map((section, i) => <div key={i}>
      <Divider component="hr"/>
      <List component="ul">
        {section.name ? <ListSubheader inset>{section.name}</ListSubheader> : null}
        {Object.values(section.routes)
          .filter(route => !route.hidden)
          .map((route, i) => <Link
              key={i}
              to={route.path}
              className={classes.link}
            >
              <ListItem button>
                {route.icon !== null ? <ListItemIcon>{route.icon}</ListItemIcon> : null}
                <ListItemText primary={route.name}/>
              </ListItem>
            </Link>,
          )}
      </List>
    </div>)}
  </>;
};

export default DrawerItemList;
