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

  const routeSections = routes.map((section, i) => {
    return <div key={i}>
      <Divider component="hr"/>
      <List component="ul">
        {section.name ? <ListSubheader inset>{section.name}</ListSubheader> : null}
        {section.routes.map(route => <Link to={route.path} className={classes.link}>
            <ListItem key={route.path} button>
              {route.icon !== null
                ? <ListItemIcon>
                  {route.icon}
                </ListItemIcon>
                : null}
              <ListItemText primary={route.name}/>
            </ListItem>
          </Link>,
        )}
      </List>
    </div>;
  });

  return <>{routeSections}</>;
};

export default DrawerItemList;
