import React from 'react';

import word from '../../../../assets/icons8-microsoft-word-48.png';
import docs from '../../../../assets/icons8-google-docs-48.png';
import excel from '../../../../assets/icons8-microsoft-excel-48.png';
import sheets from '../../../../assets/icons8-google-sheets-48.png';
import powerpoint from '../../../../assets/icons8-microsoft-powerpoint-48.png';
import slides from '../../../../assets/icons8-google-slides-48.png';

const Office = () => {
  return (
    <div>
      <div className="tool">
        <span className="tool_text">Word/Docs</span>
        <img src={word} width="48px" height="48px" />
        <img src={docs} width="48px" height="48px" />
      </div>
      <div className="tool">
        <span className="tool_text">Excel/Sheets</span>
        <img src={excel} width="48px" height="48px" />
        <img src={sheets} width="48px" height="48px" />
      </div>
      <div className="tool">
        <span className="tool_text">Powerpoint/Slides</span>
        <img src={powerpoint} width="48px" height="48px" />
        <img src={slides} width="48px" height="48px" />
      </div>
    </div>
  );
}

export default Office;
