import React, { useEffect, useState } from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import images from '../../images';

const Contacts = ({ swClass }) => {
  const [contacts, setContacts] = useState({});

  useEffect(() => {
    const fetchData = async () => await fetch('/data/contacts');
    fetchData()
      .then(async res => {
        const data = await res.json();
        setContacts(data);
      })
      .catch(err => { throw err })
  }, []);

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
          <img
            src={images['contacts'][contact.icon]}
            width={dims.width}
            height={dims.height}
          />
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
