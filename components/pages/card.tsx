import * as React from 'react';

import { withStyles, Theme, StyleRulesCallback } from '@material-ui/core/styles';
import * as classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles: StyleRulesCallback = (theme: Theme) => ({
  card: {
    maxWidth: 600,
  },

  details: {
    display: 'flex',
  },

  direction: {
    display: 'flex',
    flexDirection: 'column',
  },
  
  media: {
    width: "100%",
    maxWidth: 200,
    marginLeft: 15,
  },

  content: {
    flex: '1 0 auto',
    paddingBottom: 0,
    paddingTop: 0,
  }, 
   
  
  actions: {
    display: 'flex',
  },

  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  
  title: {
    fontWeight: 700,
    fontSize: 16,
  },
  
  contactInfo: {
    fontWeight: 200,
  },
  
  linkStyle: {
    textDecoration: 'none',
    color: '#000',
  },
  
  divider: {
    left: 24,
    position: 'relative',
    width: '90%',
  }
});

class Component extends React.Component<any, any> {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
    console.log('ghj');
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            title="Наши контакты"
          />
          <div className={classes.details}>
            <CardMedia
              className={classes.media}
              image="/pages/about/panorama.jpg"
              title="Map"
            />
            <div className={classes.direction}>
              <CardContent className={classes.content} 
                style={{
                  paddingBottom: 0,
                }}
                >
                <List>
                  <ListItem>
                    <ListItemText primary="Адрес:" secondary="129085, Москва, ул. Проспект Мира, д.101, стр. 1, 600 офис."/>
                  </ListItem>
                  <Divider component="li" className={classes.divider} />
                  <ListItem>
                    <ListItemText primary="Телефон:" secondary="+7 (495) 221-89-35"/>
                  </ListItem>
                  <Divider component="li" className={classes.divider} />
                  <ListItem>
                    <ListItemText primary="E-mail:" secondary={<a href="mailto:info@styleschool.ru">info@styleschool.ru</a>}/>
                  </ListItem>
                  <Divider component="li" className={classes.divider} />
                  <ListItem>
                    <ListItemText primary="Время работы:" secondary="Пн - Пт с 10:00 до 19:00 (мск)"/>
                  </ListItem>
                </List>
              </CardContent>
            </div>
          </div>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="title" >
                Реквизиты
              </Typography>
              <Typography paragraph variant="body2">
                Негосударственное образовательное частное учреждение «Центр дополнительного образования «Высшая школа стилистики»»
              </Typography>
              <Typography paragraph variant="body2">
                <span style={{textTransform: 'uppercase'}}>ИНН</span> 7707047775<br/>
                <span style={{textTransform: 'uppercase'}}>КПП</span> 770701001<br/>
                <span style={{textTransform: 'uppercase'}}>ОГРН</span> 1117799000186
              </Typography>
              <Typography paragraph variant ="title">
                Адрес для корреспонденции:
              </Typography>
              <Typography paragraph variant ="body2">
                127055, Москва, ул. Новослободская д.14/19 стр.1
              </Typography>
              <Typography paragraph variant="body2">
                р/с 40703810600000000063 в «Банк Кремлевский» (ООО), г. Москва,<br/>к/с 30101810745250000196, БИК 044525196
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Component);