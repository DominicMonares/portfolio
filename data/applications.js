// Atelier
import fec1 from '../assets/demos/fec1.mp4';
import fec2 from '../assets/demos/fec2.mp4';
import fec3 from '../assets/demos/fec3.mp4';
import fec4 from '../assets/demos/fec4.mp4';

// PetPix
import petpix1 from '../assets/demos/petpix1.mp4';
import petpix2 from '../assets/demos/petpix2.mp4';
import petpix3 from '../assets/demos/petpix3.mp4';
import petpix4 from '../assets/demos/petpix4.mp4';

// fretJS
import fretJS1 from '../assets/demos/fretJS1.mp4';
import fretJS2 from '../assets/demos/fretJS2.mp4';

// Clown Detector
import clown1 from '../assets/demos/clown1.mp4';
import clown2 from '../assets/demos/clown2.mp4';

// SPP Extras
import sppe1 from '../assets/demos/sppe1.mp4';
import sppe2 from '../assets/demos/sppe2.mp4';
import sppe3 from '../assets/demos/sppe3.mp4';
import sppe4 from '../assets/demos/sppe4.mp4';

const applications = [
  {
    title: 'SPP Extras',
    desc: 'A desktop application that provides miscellaneous tools for Celguar\'s SPP Classics Repack',
    links: [
      {
        label: 'GitHub',
        link: 'https://github.com/DominicMonares/spp-extras'
      },
      {
        label: 'PR #171',
        link: 'https://github.com/celguar/spp-classics-cmangos/pull/171'
      }
    ],
    techs: 'TypeScript, React, Redux, Electron, MySQL, Jest',
    demos: [
      {
        caption: 'Track the completion status of all quests across all characters',
        mediaType: 'video/mp4',
        media: sppe4,
        dims: {
          web: {
            width: 650,
            height: 540
          },
          mobile: {
            width: 237,
            height: 197
          }
        }
      },
      {
        caption: 'Transfer achievement credit, rewards, and progress between all characters',
        mediaType: 'video/mp4',
        media: sppe1,
        dims: {
          web: {
            width: 960,
            height: 540
          },
          mobile: {
            width: 350,
            height: 197
          }
        }
      },
      {
        caption: 'Transfer pets and mounts between all characters',
        mediaType: 'video/mp4',
        media: sppe2,
        dims: {
          web: {
            width: 960,
            height: 540
          },
          mobile: {
            width: 350,
            height: 197
          }
        }
      },
      {
        caption: 'Transfer reputation standings between all characters',
        mediaType: 'video/mp4',
        media: sppe3,
        dims: {
          web: {
            width: 960,
            height: 540
          },
          mobile: {
            width: 350,
            height: 197
          }
        }
      }
    ]
  },
  {
    title: 'Clown Detector',
    desc: 'A Google Chrome extension that helps you spot silly LinkedIn jobs',
    links: [
      {
        label: 'Chrome Web Store',
        link: 'https://chrome.google.com/webstore/detail/clown-detector/djejlndcgacefmmiamjankkmdeoebhif'
      },
      {
        label: 'GitHub',
        link: 'https://github.com/DominicMonares/clown-detector'
      }
    ],
    techs: 'TypeScript, React, jQuery, MUI, Jest',
    demos: [
      {
        caption: 'Flag LinkedIn jobs with a clown emoji and the matching keyword(s) found',
        mediaType: 'video/mp4',
        media: clown1,
        dims: {
          web: {
            width: 945,
            height: 640
          },
          mobile: {
            width: 350,
            height: 237
          }
        }
      },
      {
        caption: 'Settings can be changed from the extension popup menu',
        mediaType: 'video/mp4',
        media: clown2,
        dims: {
          web: {
            width: 632,
            height: 354
          },
          mobile: {
            width: 350,
            height: 205
          }
        }
      }
    ]
  },
  {
    title: 'fretJS',
    desc: 'An app that lets you write and execute JavaScript using only an electric guitar',
    links: [
      {
        label: 'GitHub',
        link: 'https://github.com/DominicMonares/fret-js'
      }
    ],
    techs: 'TypeScript, React, webpack, Web Audio API',
    demos: [
      {
        caption: '',
        mediaType: 'youtube',
        media: 'https://www.youtube.com/embed/fRe4yupMJ-A',
        dims: {
          web: {
            width: 960,
            height: 540
          },
          mobile: {
            width: 350,
            height: 197
          }
        }
      },
      {
        caption: 'Works for both 22 and 24 fret guitars',
        mediaType: 'video/mp4',
        media: fretJS1,
        dims: {
          web: {
            width: 960,
            height: 501
          },
          mobile: {
            width: 350,
            height: 183
          }
        }
      },
      {
        caption: 'Responsive fretboard diagram',
        mediaType: 'video/mp4',
        media: fretJS2,
        dims: {
          web: {
            width: 956,
            height: 416
          },
          mobile: {
            width: 350,
            height: 152
          }
        }
      },
    ]
  },
  {
    title: 'PetPix',
    desc: 'Social media application centered around pet pictures',
    links: [
      {
        label: 'GitHub - Front End',
        link: 'https://github.com/DominicMonares/BOC'
      },
      {
        label: 'GitHub - Back End',
        link: 'https://github.com/DominicMonares/backend'
      }
    ],
    techs: 'React Native, Expo, Redux, Express, MongoDB, Passport.js, Nodemailer, Jest, React Native Testing Library',
    demos: [
      {
        caption: 'Local auth flow that I was responsible for',
        mediaType: 'video/mp4',
        media: petpix1,
        dims: {
          web: {
            width: 177,
            height: 356
          },
          mobile: {
            width: 350,
            height: 704
          }
        }
      },
      {
        caption: 'Third-party auth flow that I was responsible for',
        mediaType: 'video/mp4',
        media: petpix2,
        dims: {
          web: {
            width: 177,
            height: 356
          },
          mobile: {
            width: 350,
            height: 704
          }
        }
      },
      {
        caption: 'UI that I designed using client\'s specifications',
        mediaType: 'video/mp4',
        media: petpix3,
        dims: {
          web: {
            width: 177,
            height: 354
          },
          mobile: {
            width: 350,
            height: 700
          }
        }
      },
      {
        caption: 'UI that I designed using client\'s specifications',
        mediaType: 'video/mp4',
        media: petpix4,
        dims: {
          web: {
            width: 177,
            height: 354
          },
          mobile: {
            width: 350,
            height: 700
          }
        }
      },
    ]
  },
  {
    title: 'Atelier',
    desc: 'eCommerce application: Q&A widget on product page',
    links: [
      {
        label: 'GitHub',
        link: 'https://github.com/DominicMonares/fec-atelier'
      }
    ],
    techs: 'React, webpack, Babel, Express, Node.js, AWS: EC2, Jest, React Testing Library',
    demos: [
      {
        caption: 'Dynamically sorting search bar',
        mediaType: 'video/mp4',
        media: fec1,
        dims: {
          web: {
            width: 713,
            height: 346
          },
          mobile: {
            width: 350,
            height: 170
          }
        }
      },
      {
        caption: 'Rate helpfulness and flag inappropriate answers for review',
        mediaType: 'video/mp4',
        media: fec2,
        dims: {
          web: {
            width: 664,
            height: 180
          },
          mobile: {
            width: 350,
            height: 95
          }
        }
      },
      {
        caption: 'Answer accordion, expandable questions, and infinitely scrolling display',
        mediaType: 'video/mp4',
        media: fec3,
        dims: {
          web: {
            width: 718,
            height: 378
          },
          mobile: {
            width: 350,
            height: 184
          }
        }
      },
      {
        caption: 'Answer submission modal and image upload',
        mediaType: 'video/mp4',
        media: fec4,
        dims: {
          web: {
            width: 718,
            height: 380
          },
          mobile: {
            width: 350,
            height: 185
          }
        }
      }
    ]
  },
  {
    title: 'Atelier API',
    desc: 'API microservice for eCommerce application',
    links: [
      {
        label: 'GitHub',
        link: 'https://github.com/DominicMonares/cactus-oasis-ov'
      }
    ],
    techs: 'Express, MongoDB, Memcached, NGINX, K6, Loader.io, AWS: EC2 / S3, Supertest',
    demos: []
  },
  {
    title: 'Account-wide',
    desc: 'Tool for Celguar\'s SPP Classics Repack that transfers progress between player characters',
    links: [
      {
        label: 'GitHub',
        link: 'https://github.com/Domclay/spp-account-wide'
      }
    ],
    techs: 'Node.js, MySQL',
    demos: []
  },
];

export default applications;
