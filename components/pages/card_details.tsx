import * as React from 'react';

import { withStyles, Theme, StyleRulesCallback } from '@material-ui/core/styles';
import * as classnames from 'classnames';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";

const styles: StyleRulesCallback = (theme: Theme) => ({
  divider: {
    left: 24,
    position: 'relative',
    width: '100%',
  }
});

class Component extends React.Component<any, any> {
  state = {
    expanded: null
  };

  handleChange = (panel:any) => (event:any, expanded:any) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <ExpansionPanel 
        expanded={expanded === "panel"}
        onChange={this.handleChange("panel")}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subheading">
          Реквизиты
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
         <List>
            <ListItem>
              <ListItemText primary="Негосударственное образовательное частное учреждение «Центр дополнительного образования «Высшая школа стилистики»»" />
            </ListItem>
            <Divider component="li" className={classes.divider} />
            <ListItem>
              <ListItemText primary="ИНН" secondary="7707047775" />
              <ListItemText primary="КПП" secondary="770701001" />
              <ListItemText primary="ОГРН" secondary="1117799000186" />
            </ListItem>
            <Divider component="li" className={classes.divider} />
            <ListItem>
              <ListItemText primary="Адрес для корреспонденции:" secondary="127055, Москва, ул. Новослободская д.14/19 стр.1" />
            </ListItem>
            <Divider component="li" className={classes.divider} />
            <ListItem>
              <ListItemText secondary="р/с 40703810600000000063 в «Банк Кремлевский» (ООО), г. Москва" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="к/с 30101810745250000196" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="БИК 044525196" />
            </ListItem>
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default withStyles(styles)(Component);