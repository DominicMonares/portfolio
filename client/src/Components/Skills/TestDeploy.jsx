import React from 'react';

import jest from '../../../../assets/icons8-jest-can-collect-code-coverage-information-from-entire-projects-48.png';
import mocha from '../../../../assets/mocha.png';
import chai from '../../../../assets/chai.png';
import supertest from '../../../../assets/icons8-npm-48.png';
import ec2 from '../../../../assets/ec2.png';
import s3 from '../../../../assets/s3.png';
import nginx from '../../../../assets/icons8-nginx-48.png';
import k6 from '../../../../assets/k6.png';
import loaderio from '../../../../assets/loaderio.png';

const TestDeploy = () => {
  return (
    <div className="test_deploy_container">
      <span className="skill_title">{'Testing & Deployment'}</span>
      <div className="skill_container">
        <div className="tool">
          <span className="tool_text">Jest</span>
          <img src={jest} width="48px" height="48px" />
        </div>
        <div className="tool">
          <span className="tool_text">Mocha</span>
          <img src={mocha} width="48px" height="48px" />
        </div>
        <div className="tool">
          <span className="tool_text">Chai</span>
          <img src={chai} width="48px" height="48px" />
        </div>
        <div className="tool">
          <span className="tool_text">SuperTest</span>
          <img src={supertest} width="48px" height="48px" />
        </div>
        <div className="tool">
          <span className="tool_text">AWS: EC2</span>
          <img src={ec2} width="46px" height="46px" />
        </div>
        <div className="tool">
          <span className="tool_text">AWS: S3</span>
          <img src={s3} width="46px" height="46px" />
        </div>
        <div className="tool">
          <span className="tool_text">NGINX</span>
          <img src={nginx} width="48px" height="48px" />
        </div>
      </div>
      <div className="skill_container_lower_td">
        <div className="tool">
          <span className="tool_text">K6</span>
          <img src={k6} width="46px" height="46px" />
        </div>
        <div className="tool">
          <span className="tool_text">Loader.io</span>
          <img src={loaderio} width="48px" height="48px" />
        </div>
      </div>
    </div>
  );
}

export default TestDeploy;
