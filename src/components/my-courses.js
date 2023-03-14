import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PurchasedCourses from './purchased-courses';
import Whishlists from './whishlists';

function MyCourses(){

    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index);
      };


    return(
        <div style={{backgroundColor:'#f1f7f8'}}>
 <section class="page-header-area my-course-area">
    <div class="container">
        <div class="row"> 
            
            <div class="col">
                <br/>
                <h1 class="page-title print-hidden">My courses</h1>
                <ul class="print-hidden">
                <Tabs selectedTabClassName="active">
                    <TabList>
                        
                    <Tab><li><a href="#">Courses</a></li></Tab>
                    <Tab><li><a href="#">Wishlists</a></li></Tab>
                    <Tab><li><a href="#">Messages</a></li></Tab>
                    <Tab><li><a href="#">Purchase history</a></li></Tab>
                    <Tab><li><a href="#">Profile</a></li></Tab>
                    </TabList>
                    <TabPanel>
                    <PurchasedCourses/>
                    </TabPanel>
                    <TabPanel>
                    <Whishlists/>
                    </TabPanel>
                    <TabPanel>
                    <h2>Any content 3</h2>
                    </TabPanel>
                    <TabPanel>
                    <h2>Any content 4</h2>
                    </TabPanel>
                    <TabPanel>
                    <h2>Any content 5</h2>
                    </TabPanel>
                    
                </Tabs>
                  
                </ul>
            </div>
        </div>
    </div>
</section>




        </div>
    )
}

export default MyCourses;