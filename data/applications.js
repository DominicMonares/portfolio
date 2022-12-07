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

// Clown Detector
import clown1 from '../assets/demos/clown1.mp4';
import clown2 from '../assets/demos/clown2.png';

const applications = [
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
        mediaType: 'pic',
        media: clown2,
        dims: {
          web: {
            width: 634,
            height: 372
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
    title: 'fretJs',
    desc: 'An app that lets you write and execute JavaScript using only an electric guitar',
    links: [
      {
        label: 'GitHub',
        link: 'https://github.com/DominicMonares/fret-js'
      }
    ],
    techs: 'React, webpack, Babel, Express, Web Audio API',
    demos: [
      {
        caption: '',
        mediaType: 'youtube',
        media: 'https://www.youtube.com/embed/QHJy7SKRfSE',
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
        media: petpix4,
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
    desc: 'Tool for the Celguar SPP Classics Repack that transfers progress between player characters',
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
