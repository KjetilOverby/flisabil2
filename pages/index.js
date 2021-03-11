import React from 'react';
import FooterComponent from '../components/common-components/FooterComponent';
import LogoSection from '../components/startpage/LogoSection';
import SectionStartPage from '../components/startpage/SectionStartPage';

import StartPageComponent from '../components/startpage/StartPageComponent';
import TextBox from '../components/startpage/TextBox';

export default function Index({ setTitle }) {
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
