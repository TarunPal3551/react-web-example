import React from "react";
import "../styles/MenuCategoryTabs.css"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeContext } from "@emotion/react";
import { fontWeight } from "@mui/system";
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
      
    };
  }

export default function MenuCategoryTabs(){
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <div className="menuCategoryView">
     <Tabs selectionFollowsFocus
        orientation="vertical"
        variant="scrollable"
        value={value}
        textColor='primary'
        dividerColor='primary'
        indicatorColor="primary"
        sx={{ borderRight: 5,
           borderColor: 'divider'
           }}
        onChange={handleChange}
        aria-label="menu category"
      >
        <Tab className="tabs" label="Beverages" {...a11yProps(0)} />
        <Tab className="tabs" label="Main Course" {...a11yProps(1)} />
        <Tab className="tabs" label="Chinese" {...a11yProps(2)} />
        <Tab className="tabs" label="Family Combos" {...a11yProps(3)} />
        <Tab className="tabs" label="Breads" {...a11yProps(4)} />
      </Tabs>
        </div>
    );
}