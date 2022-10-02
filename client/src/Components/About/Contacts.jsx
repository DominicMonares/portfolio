import React from 'react';

import { contacts } from '../../../../data/contacts';

const Contacts = () => {
  const device = 'web'; // TEMP, NEEDS TO BE MADE DYNAMIC
  const allContacts = [];
  for (const c in contacts) {
    const contact = contacts[c]
    const dims = contact['dims'][device];
    allContacts.push(
      <div className="contact">
        <a className="contact_link" href={contact.link} target="_blank">
          <img src={contact.icon} width={dims.width} height={dims.height} />
          <div className="contact_link">{contact.display}</div>
        </a>
      </div>
    );
  }

  return ( <div className="contacts_container">{allContacts}</div> );
}

export default Contacts;
