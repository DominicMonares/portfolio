import React from 'react';

import PetPix from './PetPix';
import Atelier from './Atelier';
import FretJs from './FretJs';

const Applications = () => {
  return (
    <div className="applications_container">
      <FretJs />
      <PetPix />
      <Atelier />
    </div>
  );
}

export default Applications;
