// Atelier
import fec1 from '../assets/fec1.mp4';
import fec2 from '../assets/fec2.mp4';
import fec3 from '../assets/fec3.mp4';
import fec4 from '../assets/fec4.mp4';

// PetPix
import petpix1 from '../assets/petpix1.mp4';
import petpix2 from '../assets/petpix2.mp4';
import petpix3 from '../assets/petpix3.mp4';
import petpix4 from '../assets/petpix4.mp4';

const applications = [
  {
    title: 'Atelier',
    desc: 'eCommerce application: Q&A widget on product page',
    links: [
      'https://github.com/DominicMonares/fec-atelier'
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
            width: 713, // PLACEHOLDER VALUE
            height: 346 // PLACEHOLDER VALUE
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
            width: 664, // PLACEHOLDER VALUE
            height: 180 // PLACEHOLDER VALUE
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
            width: 718, // PLACEHOLDER VALUE
            height: 378 // PLACEHOLDER VALUE
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
            width: 718, // PLACEHOLDER VALUE
            height: 380 // PLACEHOLDER VALUE
          }
        }
      }
    ]
  },
  {
    title: 'PetPix',
    desc: 'Social media application centered around pet pictures',
    links: [
      'https://github.com/DominicMonares/BOC',
      'https://github.com/DominicMonares/backend'
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
            width: 177, // PLACEHOLDER VALUE
            height: 356 // PLACEHOLDER VALUE
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
            width: 177, // PLACEHOLDER VALUE
            height: 356 // PLACEHOLDER VALUE
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
            width: 177, // PLACEHOLDER VALUE
            height: 356 // PLACEHOLDER VALUE
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
            width: 177, // PLACEHOLDER VALUE
            height: 356 // PLACEHOLDER VALUE
          }
        }
      },
    ]
  },
  {
    title: 'fretJs',
    desc: 'An app that lets you write and execute JavaScript using only an electric guitar',
    links: [
      'https://github.com/DominicMonares/fret-js'
    ],
    techs: 'React, webpack, Babel, Express, Web Audio API',
    demos: [
      {
        caption: '',
        mediaType: 'youtube',
        media: 'https://www.youtube.com/embed/QHJy7SKRfSE',
        dims: {
          web: {
            width: null,
            height: null
          },
          mobile: {
            width: null,
            height: null
          }
        }
      }
    ]
  }
];

export default applications;
