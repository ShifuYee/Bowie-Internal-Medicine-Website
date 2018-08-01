// React + Gatsby
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// When using webpack, the stylesheet must be imported
import 'react-tabs/style/react-tabs.css';

// Images
import homeimage from '../images/home-page-image.jpg'

const HomePage = () => (
  <div className="container">
    <div className="home-body">
      <h1>Latest News</h1>
    </div>
    <img alt="Home Page Image" src={homeimage} className="img-responsive" />
    <div className="home-body">
      <h1>Welcome to Bowie Internal Medicine</h1>
      <p>
        Bowie Internal Medicine is a group of four physicians 
        and two certified nurse practitioners specializing in 
        gastrointestinal, adolescent, adult, and geriatric medicine. 
        We have been serving the community for over 40 years for 
        all general medical and many minor surgical and 
        gynecological problems.
      </p>
      <Tabs className="home-tabs">
        <TabList>
          <Tab>Primary Care</Tab>
          <Tab>Gastroenterology</Tab>
          <Tab>Office Hours</Tab>
          <Tab>Patient Portal</Tab>
        </TabList>
        <TabPanel>
          <h2></h2>
        </TabPanel>
        <TabPanel>
          <h2></h2>
        </TabPanel>
        <TabPanel>
          <table className="office-hours">
            <tbody>
              <tr>
                <td>Monday</td>
                <td>8:30 AM – 6:30 PM</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>8:30 AM – 5:00 PM</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>8:30 AM – 7:00 PM</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>8:30 AM – 6:30 PM</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>8:30 AM – 2:45 PM</td>
              </tr>
              <tr>
                <td colSpan="2">Closed on weekends</td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
        <TabPanel>
          <div itemProp="description">
            <p>
              This is a service, which is being offered as a convenience. 
              If you require a more immediate response to your prescription 
              needs, please contact our office to make an appointment.
            </p>
            <a href="#">Visit Portal</a>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  </div>
)

export default HomePage
