import React from 'react';
import { makeStyles } from '@material-ui/core';
import HeaderBackground from '../common-components/HeaderBackground';
import TextOnHeader from '../common-components/TextOnHeader';
import HeaderComponent from '../common-components/HeaderComponent';
import KontaktSection from './KontaktSection';

const useStyles = makeStyles((theme) => ({
  // background: {
  //   background:
  //     'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("https://lh3.googleusercontent.com/lTkUmiP4h83ElpDmZzN8jCIJNhs_QVIm462XIootgLGvIyOEbJTGsnRsI-slDPfPIzyH1pYk4fZoGogyQeJwKD5Me40O4p29YGQm3VXS53u_1enqt88jnsejoDOLU3aKqIOIVWcKcUiLVnMqmnHnBbwNjHmO_BS1NgEHwd755dmF9dAiKr56E3ujnZe6wbmviQX2ItAEINO9SAzq8wuNRIYSvB69M5YQRKZ6OL66P2Nozkd5qMefV3pIMzpZjlF65_p8MdNUKg846udBooJmopWGOtN9IPPnOrys17WSlgtBjSc-Upt2ZhPyoAmSlBE7bjSJBlgozfxRRw6fra9ioFLFcARdQxAqfM6S2HtRfC8jZqyfiliZSGlUE43QMMxcrrhxeU8glqebzs2AVwxhAqWjuM4kE3fDbasuqIljKwkUsA-w_O6ztfWkN4xz9DcvvXwrZDyX5ZYw-E3b_xkiQDOFajDHjoKk1w4VWRc3S6JVdPUc6ccJw7niiN2rpYlIpvBrgKVgZV99L2uAiFErdbjXvmlyc8xV5redkep2PaLK-WmIjP3SeHynxrKOfntjyhV8QFGdFlhtBD_oF_DTcJAfBgDXz429YrPtdcRCPEvP3tC8ri-IXJF64A4NN6SQujukAxSk-QhXmPVRP8fcOSvrJVrpRZet22mLL6AeAS-wuDVNK5r-3-EOZKNe=w3840-h2880-no?authuser=0")',
  //   minHeight: '100vh',
  //   backgroundPosition: 'calc(100% - 0px) calc(100% - 0px)',
  //   backgroundSize: 'cover',
  //   [theme.breakpoints.down('md')]: {
  //     background: 'linear-gradient(#333, #000)',
  //   },
  // },
}));
const KontaktPage = ({ setTitle }) => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <HeaderBackground
        bgImage='linear-gradient(rgba(9, 1, 1, 1),rgba(10, 1, 1, .4)), url("https://lh3.googleusercontent.com/pw/ACtC-3eEzqYxalqBQMQ1JRwE7gM2OIw1pI1rISWxroomdNJA_XCS6QilIFzX4EbZoQvkPQHky0FuvhOcnf504DjyYQdelp66P-7tk95thfHgOHs5VzNVRmgqVwL0n91ej-eS03mFvgSnmUxAetyzlpZ_HMcD=w1440-h1080-no?authuser=0")'
        backgroundPositionXL="calc(100% - 0px) calc(100% - 350px)"
        backgroundPosition1999="calc(100% - 0px) calc(100% - 250px)"
        bgImageMobile='linear-gradient(rgba(16, 19, 25, 0.7), rgba(15, 5, 23, .6)), url("https://lh3.googleusercontent.com/lTkUmiP4h83ElpDmZzN8jCIJNhs_QVIm462XIootgLGvIyOEbJTGsnRsI-slDPfPIzyH1pYk4fZoGogyQeJwKD5Me40O4p29YGQm3VXS53u_1enqt88jnsejoDOLU3aKqIOIVWcKcUiLVnMqmnHnBbwNjHmO_BS1NgEHwd755dmF9dAiKr56E3ujnZe6wbmviQX2ItAEINO9SAzq8wuNRIYSvB69M5YQRKZ6OL66P2Nozkd5qMefV3pIMzpZjlF65_p8MdNUKg846udBooJmopWGOtN9IPPnOrys17WSlgtBjSc-Upt2ZhPyoAmSlBE7bjSJBlgozfxRRw6fra9ioFLFcARdQxAqfM6S2HtRfC8jZqyfiliZSGlUE43QMMxcrrhxeU8glqebzs2AVwxhAqWjuM4kE3fDbasuqIljKwkUsA-w_O6ztfWkN4xz9DcvvXwrZDyX5ZYw-E3b_xkiQDOFajDHjoKk1w4VWRc3S6JVdPUc6ccJw7niiN2rpYlIpvBrgKVgZV99L2uAiFErdbjXvmlyc8xV5redkep2PaLK-WmIjP3SeHynxrKOfntjyhV8QFGdFlhtBD_oF_DTcJAfBgDXz429YrPtdcRCPEvP3tC8ri-IXJF64A4NN6SQujukAxSk-QhXmPVRP8fcOSvrJVrpRZet22mLL6AeAS-wuDVNK5r-3-EOZKNe=w3840-h2880-no?authuser=0")'
        backgroundPositionMobile="0"
        height="40vh"
      >
        <HeaderComponent setTitle={setTitle} />
        <TextOnHeader header1="KON" header2="TAKT" />
      </HeaderBackground>
      <KontaktSection />
    </div>
  );
};

export default KontaktPage;

// <HeaderBackground
// bgImage='linear-gradient(rgba(9, 1, 1, 1),rgba(10, 1, 1, .2)), url("https://lh3.googleusercontent.com/lTkUmiP4h83ElpDmZzN8jCIJNhs_QVIm462XIootgLGvIyOEbJTGsnRsI-slDPfPIzyH1pYk4fZoGogyQeJwKD5Me40O4p29YGQm3VXS53u_1enqt88jnsejoDOLU3aKqIOIVWcKcUiLVnMqmnHnBbwNjHmO_BS1NgEHwd755dmF9dAiKr56E3ujnZe6wbmviQX2ItAEINO9SAzq8wuNRIYSvB69M5YQRKZ6OL66P2Nozkd5qMefV3pIMzpZjlF65_p8MdNUKg846udBooJmopWGOtN9IPPnOrys17WSlgtBjSc-Upt2ZhPyoAmSlBE7bjSJBlgozfxRRw6fra9ioFLFcARdQxAqfM6S2HtRfC8jZqyfiliZSGlUE43QMMxcrrhxeU8glqebzs2AVwxhAqWjuM4kE3fDbasuqIljKwkUsA-w_O6ztfWkN4xz9DcvvXwrZDyX5ZYw-E3b_xkiQDOFajDHjoKk1w4VWRc3S6JVdPUc6ccJw7niiN2rpYlIpvBrgKVgZV99L2uAiFErdbjXvmlyc8xV5redkep2PaLK-WmIjP3SeHynxrKOfntjyhV8QFGdFlhtBD_oF_DTcJAfBgDXz429YrPtdcRCPEvP3tC8ri-IXJF64A4NN6SQujukAxSk-QhXmPVRP8fcOSvrJVrpRZet22mLL6AeAS-wuDVNK5r-3-EOZKNe=w3840-h2880-no?authuser=0")'
// backgroundPositionXL="calc(100% - 0px) calc(100% - 350px)"
// backgroundPosition1999="calc(100% - 0px) calc(100% - 250px)"
// bgImageMobile='linear-gradient(rgba(16, 19, 25, 0.7), rgba(15, 5, 23, .6)), url("https://lh3.googleusercontent.com/lTkUmiP4h83ElpDmZzN8jCIJNhs_QVIm462XIootgLGvIyOEbJTGsnRsI-slDPfPIzyH1pYk4fZoGogyQeJwKD5Me40O4p29YGQm3VXS53u_1enqt88jnsejoDOLU3aKqIOIVWcKcUiLVnMqmnHnBbwNjHmO_BS1NgEHwd755dmF9dAiKr56E3ujnZe6wbmviQX2ItAEINO9SAzq8wuNRIYSvB69M5YQRKZ6OL66P2Nozkd5qMefV3pIMzpZjlF65_p8MdNUKg846udBooJmopWGOtN9IPPnOrys17WSlgtBjSc-Upt2ZhPyoAmSlBE7bjSJBlgozfxRRw6fra9ioFLFcARdQxAqfM6S2HtRfC8jZqyfiliZSGlUE43QMMxcrrhxeU8glqebzs2AVwxhAqWjuM4kE3fDbasuqIljKwkUsA-w_O6ztfWkN4xz9DcvvXwrZDyX5ZYw-E3b_xkiQDOFajDHjoKk1w4VWRc3S6JVdPUc6ccJw7niiN2rpYlIpvBrgKVgZV99L2uAiFErdbjXvmlyc8xV5redkep2PaLK-WmIjP3SeHynxrKOfntjyhV8QFGdFlhtBD_oF_DTcJAfBgDXz429YrPtdcRCPEvP3tC8ri-IXJF64A4NN6SQujukAxSk-QhXmPVRP8fcOSvrJVrpRZet22mLL6AeAS-wuDVNK5r-3-EOZKNe=w3840-h2880-no?authuser=0")'
// backgroundPositionMobile="0"
// height="40vh"
// >
// <HeaderComponent />
// <TextOnHeader header1="KON" header2="TAKT" />
// </HeaderBackground>
