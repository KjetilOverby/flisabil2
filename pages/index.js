import React, { useEffect } from 'react';
import FooterComponent from '../components/common-components/FooterComponent';
import LogoSection from '../components/startpage/LogoSection';
import SectionStartPage from '../components/startpage/SectionStartPage';

import StartPageComponent from '../components/startpage/StartPageComponent';
import TextBox from '../components/startpage/TextBox';

import ReactGA from 'react-ga';
export default function Index({ setTitle }) {
  useEffect(() => {
    ReactGA.initialize('UA-192063702-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <StartPageComponent setTitle={setTitle} />
      <TextBox />
      <LogoSection />
      <SectionStartPage />

      <FooterComponent />
    </div>
  );
}
