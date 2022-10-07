import React from 'react';

import { contacts } from '../../../../data/contacts';

const Contacts = ({ wide }) => {
  const device = wide ? 'web' : 'mobile';
  const allContacts = [];
  for (const c in contacts) {
    const contact = contacts[c]
    const dims = contact['dims'][device];
    allContacts.push(
      <div className={wide ? 'w_contact' : 'm_contact'}>
        <a
          className={wide ? 'w_contact_container' : 'm_contact_container'}
          href={contact.link}
          target='_blank'
        >
          <img src={contact.icon} width={dims.width} height={dims.height} />
          <div className={wide ? 'w_contact_link' : 'm_contact_link'}>{contact.display}</div>
        </a>
      </div>
    );
  }

  return (
    <div className={wide ? 'w_contacts_container' : 'm_contacts_container'}>
      {allContacts}
    </div>
  );
}

export default Contacts;
