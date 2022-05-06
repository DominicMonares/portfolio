import React from 'react';

import word from '../../../../assets/icons8-microsoft-word-48.png';
import docs from '../../../../assets/icons8-google-docs-48.png';
import excel from '../../../../assets/icons8-microsoft-excel-48.png';
import sheets from '../../../../assets/icons8-google-sheets-48.png';
import powerpoint from '../../../../assets/icons8-microsoft-powerpoint-48.png';
import slides from '../../../../assets/icons8-google-slides-48.png';

const Office = () => {
  return (
    <div className="office_container">
      <span className="skill_title">Office</span>
      <div className="sc_container">
        <div className="skill_container_office">
          <div className="tool_office">
            <span className="tool_text">Google Docs</span>
            <img src={docs} width="48px" height="48px" />
          </div>
          <div className="tool_office">
            <span className="tool_text">Microsoft Word</span>
            <img src={word} width="48px" height="48px" />
          </div>
        </div>
        <div className="skill_container_office">
          <div className="tool_office">
            <span className="tool_text">Google Sheets</span>
            <img src={sheets} width="48px" height="48px" />
          </div>
          <div className="tool_office">
            <span className="tool_text">Microsoft Excel</span>
            <img src={excel} width="48px" height="48px" />
          </div>
        </div>
        <div className="skill_container_office">
          <div className="tool_office">
            <span className="tool_text">Google Slides</span>
            <img src={slides} width="48px" height="48px" />
          </div>
          <div className="tool_office">
            <span className="tool_text">Microsoft Powerpoint</span>
            <img src={powerpoint} width="48px" height="48px" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Office;
