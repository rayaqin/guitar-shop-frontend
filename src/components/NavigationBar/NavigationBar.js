import React from 'react';
import './NavigationBar.scss';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


const NavigationBar = (props) =>  {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        props.selectTab(newValue);
    };

    const theme = createMuiTheme({
        palette: {
            primary: {
                // Purple and green play nicely together.
                main: "#f56c2c",
            },
        },
    });


    return (
        <div className="navigationBarShell">
            <ThemeProvider theme={theme}>
                <Tabs
                    className="navigationBarTabs"
                    value={value}
                    onChange={handleChange}
                    centered
                    indicatorColor="primary"
                    >
                    {props.tabs.map((tab)=>{
                       return <Tab label={tab.label}/>
                    })}
                </Tabs>
            </ThemeProvider>
        </div>
    );
}

export default NavigationBar;