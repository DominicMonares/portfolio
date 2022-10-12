import React from 'React';

const DownloadResume = ({ wide }) => {
  return (
    <div className={wide ? 'w_download' : 'm_download'}>
      <a
        href='../../../../assets/Dominic_Monares_Resume.pdf'
        className={wide ? 'w_download_link' : 'm_download_link'}

      >
        Click here to download my resume!
      </a>
    </div>
  );
}

export default DownloadResume;
