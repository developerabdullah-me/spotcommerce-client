import React from 'react';
import  './HomeProduct.scss'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const HomeProduct = () => {
    return (
    
        <div className='pt-10 border-none pl-7'>
         <Tabs>
    <TabList className='border-none pl-7'>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>

        
    );
};

export default HomeProduct;