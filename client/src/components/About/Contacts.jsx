import React from 'react';

import { contacts } from '../../../../data/contacts.json';

const Contacts = ({ swClass }) => {
  const allContacts = [];
  for (const c in contacts) {
    const contact = contacts[c]
    const dims = contact['dims'][swClass ? 'web' : 'mobile'];
    allContacts.push(
      <div className={swClass.concat('contact')}>
        <a
          className={swClass.concat('contact-container')}
          href={contact.link}
          target='_blank'
        >
          <img src={contact.icon} width={dims.width} height={dims.height} />
          <div className={swClass.concat(('contact-link'))}>{contact.display}</div>
        </a>
      </div>
    );
  }

  return (
    <div className={swClass.concat('contacts-container')}>
      {allContacts}
    </div>
  );
}

export default Contacts;
