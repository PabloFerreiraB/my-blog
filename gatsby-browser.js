import "lazysizes";
import React from 'react';
import ReactDOM from 'react-dom';
import SWUpdater from "./src/components/SWUpdater";

require("prismjs/themes/prism-tomorrow.css")

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  requere('smooth-scroll')('a[href*="#"]', {
    speed: 200,
    offset: 60 // size of the header (sidebar) when mobile
  })
}

function onServiceWorkerUpdateReady() { 
  const root = document.createElement('div');
  document.body.appendChild(root);

  ReactDOM.render(<SWUpdater />, root);
}

export { onServiceWorkerUpdateReady }