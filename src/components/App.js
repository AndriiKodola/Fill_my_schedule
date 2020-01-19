import React from 'react';
import InteractionPanel from './InteractionPanel';
import Schedule from './Schedule';
import { handleCopyToClipboard } from '../models/InteractionHandling';

const App = () => {
  const scheduleRef = React.createRef();

  return (
      <div className="schedule">
        <InteractionPanel />
        <div id="table-container">
          <button id="copy-button" onClick={e => handleCopyToClipboard(scheduleRef.current)}>Copy table to clipboard</button>
          <Schedule ref={scheduleRef}/>
        </div>
      </div>
  );
}

export default App;
