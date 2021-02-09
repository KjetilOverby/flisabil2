import React from 'react';
import FooterComponent from '../components/common-components/FooterComponent';
import SectionStartPage from '../components/startpage/SectionStartPage';

import StartPageComponent from '../components/startpage/StartPageComponent';
import TextBox from '../components/startpage/TextBox';

export default function Index() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <StartPageComponent />
      <TextBox />
      <SectionStartPage />
      <FooterComponent />
    </div>
  );
}
