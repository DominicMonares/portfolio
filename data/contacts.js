import gmail from '../assets/icons8-gmail-144.png';
import linkedIn from '../assets/icons8-linkedin-144.png';
import gitHub from '../assets/GitHub-Mark-120px-plus.png';

const contacts = {
  gmail: {
    link: 'https://dominicsmonares@gmail.com',
    display: 'dominicsmonares@gmail.com',
    icon: gmail,
    dims: {
      web: {
        width: 53,
        height: 40
      },
      mobile: {
        width: 27, // PLACEHOLDER VALUE
        height:20 // PLACEHOLDER VALUE
      }
    }
  },
  linkedin: {
    link: 'https://linkedin.com/in/dominic-monares/',
    display: 'linkedin.com/in/dominic-monares/',
    icon: linkedIn,
    dims: {
      web: {
        width: 40,
        height: 40
      },
      mobile: {
        width: 20, // PLACEHOLDER VALUE
        height: 20 // PLACEHOLDER VALUE
      }
    }
  },
  github: {
    link: 'https://github.com/DominicMonares',
    display: 'github.com/DominicMonares',
    icon: gitHub,
    dims: {
      web: {
        width: 40,
        height: 40
      },
      mobile: {
        width: 20, // PLACEHOLDER VALUE
        height: 20 // PLACEHOLDER VALUE
      }
    }
  }
}

export { contacts };
