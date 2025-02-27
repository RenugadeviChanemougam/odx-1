import React from 'react';
import AppSelector from '../AppSelector';

const TopLevelApp = () => {

  return (
    <>
      <AppSelector />
    </>
  );
}

document.addEventListener("SdkLoggedOut", () => {
  const thePegaRoot = document.getElementById('pega-root');
  if (thePegaRoot) {
    // Clear any prior Pega content within pega root
    thePegaRoot.innerHTML = "";
    const theLogoutMsgDiv = document.createElement('div');
    theLogoutMsgDiv.setAttribute('style', 'margin: 5px;');
    theLogoutMsgDiv.innerHTML = `You are logged out. Refresh the page to log in again.`;
    thePegaRoot.appendChild(theLogoutMsgDiv);
  }
});


export default TopLevelApp;
