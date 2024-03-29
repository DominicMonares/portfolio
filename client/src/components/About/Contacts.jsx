import React, { useEffect, useState } from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import media from '../../media';

const Contacts = ({ swClass }) => {
  // Fetch contacts data
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const fetchData = async () => await fetch('/data/contacts');
    fetchData()
      .then(async res => {
        const data = await res.json();
        setContacts(data);
      })
      .catch(err => { throw err })
  }, []);

  return (
    <div className={swClass.concat('contacts')}>
      {contacts.map(c => (
        <div className={swClass.concat('contact-container')}>
          <a
            className={swClass.concat('contact')}
            href={c.link}
            target="_blank"
          >
            <img
              src={media['contacts'][c.icon]}
              width={c.dims.width}
              height={c.dims.height}
            />
            <div className={swClass.concat('contact-link')}>{c.display}</div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Contacts;
