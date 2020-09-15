import React from 'react';
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
import routes from '../../Routes';

const styles = makeStyles((theme: Theme) => createStyles({
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
}));

const DrawerItemList: React.FC = () => {
  const classes = styles();

  return <>
    {Object.values(routes).filter(({ hidden }) => !hidden).map((section) => <div key={section.name}>
      <Divider component="hr" />
      <List component="ul">
        {section.name ? <ListSubheader inset>{section.name}</ListSubheader> : null}
        {Object.values(section.routes)
          .filter((route) => !route.hidden)
          .map((route) => <Link
            key={route.path}
            to={route.path}
            className={classes.link}
          >
            <ListItem button>
              {route.icon !== null ? <ListItemIcon>{route.icon}</ListItemIcon> : null}
              <ListItemText primary={route.name} />
            </ListItem>
          </Link>)}
      </List>
    </div>)}
  </>;
};

export default DrawerItemList;
