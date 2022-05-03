import React from 'react';

import node from '../../../../assets/icons8-node-js-48.png';
import express from '../../../../assets/icons8-javascript-48.png';
import mongo from '../../../../assets/icons8-mongodb-48.png';
import mySQL from '../../../../assets/mySQL.png';
import rest from '../../../../assets/icons8-rest-api-40.png';
import memcached from '../../../../assets/memcached-tutorial.png';
import passport from '../../../../assets/passport.png';
import auth0 from '../../../../assets/icons8-auth0-the-solution-you-need-for-web,-mobile,-iot,-and-internal-applications.-48.png';
import nodemailer from '../../../../assets/nodemailer.png';

const BackEnd = () => {
  return (
    <div className="backend_container">
      <div className="tool">
        <span className="tool_text">Node.js</span>
        <img src={node} width="48px" height="48px" />
      </div>
      <div className="tool">
        <span className="tool_text">Express</span>
        <img src={express} width="48px" height="48px" />
      </div>
      <div className="tool">
        <span className="tool_text">MongoDB</span>
        <img src={mongo} width="48px" height="48px" />
      </div>
      <div className="tool">
        <span className="tool_text">MySQL</span>
        <img src={mySQL} width="46px" height="46px" />
      </div>
      <div className="tool">
        <span className="tool_text">RESTful API Development</span>
        <img src={rest} width="48px" height="48px" />
      </div>
      <div className="tool">
        <span className="tool_text">Memcached</span>
        <img src={memcached} width="46px" height="46px" />
      </div>
      <div className="tool">
        <span className="tool_text">Passport.js</span>
        <img src={passport} width="48px" height="48px" />
      </div>
      <div className="tool">
        <span className="tool_text">Auth0</span>
        <img src={auth0} width="48px" height="48px" />
      </div>
      <div className="tool">
        <span className="tool_text">Nodemailer</span>
        <img src={nodemailer} width="98px" height="46px" />
      </div>
    </div>
  );
}

export default BackEnd;
