import React from 'react';

const Education = () => {
  return (
    <div className="education_container">
      <div className="edu_container">
        <div className="edu_header">
          <span className="edu_cert">
            Certificate, Advanced Software Engineering Immersive
          </span>
          <a className="edu_est" href="https://www.hackreactor.com/">Hack Reactor</a>
          <span className="edu_location">US Remote</span>
          <span className="edu_year">2021 - 2022</span>
        </div>
        <span className="edu_bullet">
          • 36-week software engineering immersive program with over 1000 hours of coding, full-stack development with JavaScript, React, Express, MongoDB, and MySQL.
        </span>
      </div>
      <div className="edu_container">
        <div className="edu_header">
          <span className="edu_cert">
            High School Diploma
          </span>
          <span className="edu_est">Oceana High School</span>
          <span className="edu_location">US Remote</span>
          <span className="edu_year">2021 - 2022</span>
        </div>
      </div>
    </div>
  );
}

export default Education;
