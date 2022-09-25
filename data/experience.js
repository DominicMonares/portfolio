const experience = [
  {
    title: 'Full-Stack Engineer / UI Owner',
    est: 'PetPix',
    location: 'US Remote',
    year: 'Mar 2022 - Apr 2022',
    app: {
      desc: 'Social media application',
      github: [
        {
          title: 'GitHub - Front End',
          link: 'https://github.com/DominicMonares/BOC'
        },
        {
          title: 'GitHub - Back End',
          link: 'https://github.com/DominicMonares/backend'
        }
      ]
    },
    bullets: [
      'Designed UI per client specifications and ensured all <b>React Native<b> component styling matched wireframes',
      'Created a secure user authentication workflow using <b>Passport.js<b> and <b>Nodemailer<b> for local auth, as well as options for Google and Twitter auth',
      'Improved UX by integrating an in-app web browser for third-party authentication'
    ]
  },
  {
    title: 'Front-End Engineer',
    est: 'Atelier',
    location: 'US Remote',
    year: 'Jan 2022 - Mar 2022',
    app: {
      desc: 'e-commerce application',
      github: [
        {
          title: 'GitHub',
          link: 'https://github.com/DominicMonares/fec-atelier'
        }
      ]
    },
    bullets: [
      'Increased Google Lighthouse performance from 40% to 81% by effectively utilizing tree-shaking, JS minification with <b>TerserWebpackPlugin<b>, and image minification with <b>Imagemin<b>',
      'Utilized the <b>Filestack API<b> to both store and retrieve user images uploaded in answer creation',
      'Developed a dynamically sorting search bar, modal windows, and an infinitely scrolling display for user questions and answers'
    ]
  },
  {
    title: 'Back-End Engineer',
    est: 'Atelier API',
    location: 'US Remote',
    year: 'Dec 2021 - Jan 2022',
    app: {
      desc: 'API microservice for eCommerce application',
      github: [
        {
          title: 'GitHub',
          link: 'https://github.com/DominicMonares/cactus-oasis-ov'
        }
      ]
    },
    bullets: [
      'Designed, built, and deployed a multi-layered backend microservice on an <b>AWS EC2<b> T2.micro instance',
      'Increased throughput from 460 RPS to 1,500 RPS, with an average latency of 30ms and error rate below 0.1%, using <b>Memcached<b>, <b>MongoDB<b> indexing, and horizontal scaling',
      'Increased fault tolerance and system availability for users by horizontally scaling microservice layers with <b>NGINX<b> load balancing, using a round-robin configuration'
    ]
  },
  {
    title: 'Facilities Assistant',
    est: 'GSH Group',
    location: 'Berkeley, CA',
    year: '2018-2020',
    app: null,
    bullets: [
      'Oversaw commercial building improvement projects with budgets ranging from tens to hundreds of thousands of dollars, further developing the property',
      'Improved access to company data by consolidating over 50 years’ worth of documents into a central filing system using OneDrive',
      'Configured Angus CMMS for the property, streamlining work order and tenant management'
    ]
  },
  {
    title: 'Site Supervisor / Security Officer',
    est: 'Allied Universal',
    location: 'San Bruno, CA',
    year: '2015-2018',
    app: null,
    bullets: [
      'Sustained client relations through effective team management and efforts to meet staffing obligations',
      'Maintained a safe work environment through cordial and professional enforcement of company rules, policies, and procedures with company staff and guests',
      'Prevented property damage and loss by identifying and reporting failing systems, leaks, and other hazards'
    ]
  },
  {
    title: 'Resident Manager',
    est: 'Pacific Equities West, LLC',
    location: 'San Francisco, CA',
    year: '2014-2015',
    app: null,
    bullets: [
      'Oversaw managerial tasks for a 49 room, 149-bed student housing property',
      'Managed lease signing and consulting with current and prospective student housing tenants',
      'Prevented property damage and loss by identifying and reporting failing systems, leaks, and other hazards'
    ]
  },
  {
    title: 'Administrative Assistant',
    est: 'Pacific Equities West, LLC',
    location: 'San Francisco, CA',
    year: '2014-2014',
    app: null,
    bullets: [
      'Processed and deposited tenant rent payments, utilizing applications such as QuickBooks, Front Desk Anywhere, and Authorize.net',
      'Generated, analyzed, and submitted revenue reports/rent rolls for commercial housing properties',
      'Assisted with hotel and commercial housing property revenue reconciliation'
    ]
  },
  {
    title: 'Front Desk Agent',
    est: 'Pacific Equities West, LLC',
    location: 'San Francisco, CA',
    year: '2013-2014',
    app: null,
    bullets: [
      'Managed front desk tasks for a 36-room hotel/hostel as well as an 18-studio music rehearsal space',
      'Registered hotel guests, processed guest payments for room charges, issued room keys, and assisted with guest requests',
      'Registered and assisted music rehearsal guests with audio and musical equipment setup'
    ]
  },
  {
    title: 'Maintenance Worker / Social Media Marketing Admin',
    est: 'Pacific Equities West, LLC',
    location: 'San Francisco, CA',
    year: '2013-2014',
    app: null,
    bullets: [
      'Completed basic building maintenance tasks such as furniture assembly/repair, painting, janitorial duties, supply pickups, etc. during daytime hours',
      'Posted daily advertisements for the various companies that operate under Pacific Equities West, LLC on Facebook.com from home',
      'Achieved a strong, positive social media presence and continuously monitored online public relations'
    ]
  }
];

export default experience;
