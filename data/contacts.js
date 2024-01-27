import gmail from '../assets/about/gmail.png';
import linkedIn from '../assets/about/linkedin.png';
import gitHub from '../assets/about/github.png';

const contacts = {
  gmail: {
    link: 'https://dominicsmonares@gmail.com',
    display: 'dominicsmonares@gmail.com',
    icon: gmail,
    dims: {
      web: {
        width: 34,
        height: 26
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
        width: 26,
        height: 26
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
        width: 27,
        height: 27
      },
      mobile: {
        width: 20,
        height: 20
      }
    }
  }
}

export { contacts };
