import React from 'react';

const Education = () => {
  return (
    <div className="education_container">
      <div className="edu_container">
        <div className="edu_header_container">
          <div>
            <span className="edu_cert">
              Certificate, Advanced Software Engineering Immersive
            </span>
            &nbsp;|&nbsp;
            <a
              className="edu_link"
              href="https://www.hackreactor.com/"
              target="_blank"
            >
              Hack Reactor
            </a>
            &nbsp;|&nbsp;
            <span className="edu_location">US Remote</span>
          </div>
          <span className="edu_year">2021 - 2022</span>
        </div>
        <span className="edu_bullet_container">
          •
          <p className="edu_bullet_text">
            36-week software engineering immersive program with over 1000 hours of coding, full-stack development with JavaScript, React, Express, MongoDB, and MySQL.
          </p>
        </span>
      </div>
      <div className="edu_container">
        <div className="edu_header_container">
          <div>
            <span className="edu_cert">
              High School Diploma
            </span>
            &nbsp;|&nbsp;
            <span className="edu_est">Oceana High School</span>
            &nbsp;|&nbsp;
            <span className="edu_location">Pacifica, CA</span>
          </div>
          <span className="edu_year">2009 - 2013</span>
        </div>
      </div>
    </div>
  );
}

export default Education;
