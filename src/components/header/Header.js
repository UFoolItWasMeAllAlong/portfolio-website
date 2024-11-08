import React, { useState, useContext } from 'react';
import Headroom from 'react-headroom';
import './Header.scss';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import StyleContext from '../../contexts/StyleContext';
import ModalIframe from '../ModalIframe/ModalIframe';
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
} from '../../portfolio';

function Header() {
  const { isDark } = useContext(StyleContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewResume = "https://docs.google.com/document/d/1Ts9iWP028rgrIO6C3Wk3p-onKpqMA9moe2swAAdI1Go/edit?usp=sharing";

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <>
      <Headroom>
        <header className={isDark ? 'dark-menu header' : 'header'}>
          <a href="/" className="logo">
            <span className="grey-color"> &lt;</span>
            <span className="logo-name">{greeting.username}</span>
            <span className="grey-color">/&gt;</span>
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn" style={{ color: 'white' }}>
            <span className={isDark ? 'navicon navicon-dark' : 'navicon'}></span>
          </label>

          <ul className={isDark ? 'dark-menu menu' : 'menu'}>
            {viewSkills && (
              <li>
                <a href="#skills">Skills</a>
              </li>
            )}
            {viewExperience && (
              <li>
                <a href="#experience">Work Experiences</a>
              </li>
            )}
            {viewOpenSource && (
              <li>
                <a href="#opensource">Open Source</a>
              </li>
            )}
            {viewResume && (
              <li>
                <p onClick={openModal}>Resume</p>
              </li>
            )}
            <li>
              <a href="#contact">Contact Me</a>
            </li>
            <li>
              <a>
                <ToggleSwitch />
              </a>
            </li>
          </ul>
        </header>
      </Headroom>
      <ModalIframe 
        visible={isModalVisible} 
        onClose={closeModal} 
        iframeUrl={"https://docs.google.com/document/d/1K2tF1Na3JbHEDOYG3QGbd5eAWRdUPQdPPgVfl9Mxz9U/edit?usp=sharing"} // Replace with your URL
      />
    </>
  );
}

export default Header;