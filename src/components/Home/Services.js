import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "@zendeskgarden/react-theming";
import { Tabs, TabList, Tab, TabPanel } from "@zendeskgarden/react-tabs";
import BigHeader from "../../styled/BigHeader";
import Heading from "../../styled/Heading";
import Button from "../../styled/Button";

const Wrapper = styled.section`
  background: #000000;
  padding: 5%;
  @media (min-width: 768px) {
    padding-top: 0;
  }
  .heading {
    margin-bottom: 20px;
    @media (min-width: 768px) {
      transform: translateY(90%);
    }
    h3 {
      color: #ffffff;
      opacity: 0.1;
      @media (min-width: 768px) {
        width: max-content;
      }
    }
    h2 {
      color: #ffffff;
    }
  }
  .header {
    border:none;
    @media (min-width: 768px) {
      padding-top: 100px;
      width: max-content;
    }
    .tab-header {
      width: 100%;
      text-align: left;
      padding: 10px 0;
      margin-bottom: 10px;
      border: none;
      &:hover {
        color: #ffffff;
      }
      h3 {
        font-size: 20px;
        font-family: ${(props) => props.theme.fam.rbold};
        margin-bottom: 15px;
      }
      p {
        font-family: ${(props) => props.theme.fam.regular};
        font-size: 15px;
      }
    }
    div[aria-selected="true"] {
      color: #ffffff;
      border: none;
      p {
        position: relative;
        width: max-content;
        padding-bottom: 3px;
        &:before {
          content: "";
          height: 2px;
          width: 100%;
          background: linear-gradient(to right, #f24d2d, #ff9b00);
          position: absolute;
          bottom: 0;
          border-radius: 10px;
          left: 0;
          animation: beforeAnimation 0.7s ease;
        }
      }
    }
  }
  .tabs {
    @media (min-width: 768px) {
      display: flex;
      .header {
        display: flex;
        border: none;
        flex-direction: column;
        width: 45%;
        text-align: left;
        justify-content: space-evenly;
      }
    }
    .header {
      display: flex;
      flex-direction: column;
      text-align: left;
    }
  }
  .panel {
    padding: 1px;
    position: relative;
    background: linear-gradient(to bottom, #f24d2d, #fbb03b);
    max-width: 400px;
    margin: 0 auto;
    @media (min-width: 768px) {
      width: 45%;
      max-width: 350px;
    }
  }

  .panel-inner {
    background: #101010;
    color: white;
    width: 100%;
    height: 100%;
    min-height: 400px;
    .tab-inner {
      padding: 5%;
      color: #ffffff;
      padding-left:15%;
      padding-top:10%;
      animation :opacityAnimation 0.7s ease-in-out;
      li {
        list-style: none;
        font-size: 18px;
        line-height: 1.3;
        font-family: ${(props) => props.theme.fam.regular};
        margin-bottom: 5px;
      }
    }
  }
  .react-tiger-transition--screen {
    overflow: hidden;
  }
  .button {
    margin-left: auto;
  }
  @keyframes beforeAnimation {
    0% {
      max-width: 0;
    }
    100% {
      max-width: 100%;
    }
  }
  @keyframes opacityAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

function Services() {
  const [selectedTab, setSelectedTab] = useState("tab-1");
  return (
    <Wrapper>
      <div className="heading">
        <BigHeader>Services</BigHeader>
        <Heading>
          What we <span>do:</span>{" "}
        </Heading>
      </div>
      <ThemeProvider>
        <Tabs
          className="tabs"
          selectedItem={selectedTab}
          onChange={setSelectedTab}
        >
          <TabList className="header">
            <Tab item="tab-1" className="tab-header">
              <h3>Media</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </Tab>
            <Tab item="tab-2" className="tab-header">
              <h3>Digital</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </Tab>
            <Tab item="tab-3" className="tab-header">
              <h3>Events</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </Tab>
          </TabList>
          <div className="panel">
            <TabPanel className="panel-inner" item="tab-1">
              <div className="tab-inner">
                <li>- Television Commercial</li>
                <li>- Corperate ADS</li>
                <li>- Event Live Recordings</li>
                <li>- Live Production</li>
                <li>- Project Visual Illustration</li>
                <li>- Animation</li>
                <li>- Film Production</li>
                <li>- Radio Jingles</li>
                <li>- Marketing</li>
                <li>- Social Media Marketing</li>
                <Button
                  iconcolor="#F24D2D"
                  textcolor="#ffffff"
                  borderColor="#ffffff"
                  link="/about"
                  text="Contact Us"
                />
              </div>
            </TabPanel>
            <TabPanel className="panel-inner" item="tab-2">
              <div className="tab-inner">
                <li>- Film Production</li>
                <li>- Brand Strategy</li>
                <li>- Package Design</li>
                <li>- Colletral Design</li>
                <li>- Corperate Identity</li>
                <li>- Trade Show Support</li>
                <li>- Editorial Developement</li>
                <li>- Photography</li>
                <li>- Websites</li>
                <li>- Apps</li>

                <Button
                  iconcolor="#F24D2D"
                  textcolor="#ffffff"
                  borderColor="#ffffff"
                  link="/about"
                  text="Contact Us"
                />
              </div>{" "}
            </TabPanel>
            <TabPanel className="panel-inner" item="tab-3">
              <div className="tab-inner">
                <li>- Management</li>
                <li>- Exhibition</li>
                <li>- Design</li>
                <li>- Sound</li>
                <li>- Stage</li>
                <li>- Lighting</li>
                <li>- Screens</li>
                <li>- Power</li>
                <Button
                  iconcolor="#F24D2D"
                  textcolor="#ffffff"
                  borderColor="#ffffff"
                  link="/about"
                  text="Contact Us"
                />
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </ThemeProvider>
    </Wrapper>
  );
}

export default Services;
