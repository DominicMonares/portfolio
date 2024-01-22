import gmail from '../assets/about/icons8-gmail-144.png';
import linkedIn from '../assets/about/icons8-linkedin-144.png';
import gitHub from '../assets/about/GitHub-Mark-120px-plus.png';

const contacts = {
  gmail: {
    link: 'https://dominicsmonares@gmail.com',
    display: 'dominicsmonares@gmail.com',
    icon: gmail,
    dims: {
      web: {
        width: 39,
        height: 30
      },
      mobile: {
        width: 27,
        height:20
      }
    }
  },
  linkedin: {
    link: 'https://linkedin.com/in/dominic-monares/',
    display: 'linkedin.com/in/dominic-monares/',
    icon: linkedIn,
    dims: {
      web: {
        width: 30,
        height: 30
      },
      mobile: {
        width: 20,
        height: 20
      }
    }
  },
  github: {
    link: 'https://github.com/DominicMonares',
    display: 'github.com/DominicMonares',
    icon: gitHub,
    dims: {
      web: {
        width: 31,
        height: 31
      },
      mobile: {
        width: 20,
        height: 20
      }
    }
  }
}

export { contacts };
