import { process } from 'react';

// eslint-disable-next-line max-len
const url = `https://cors-anywhere.herokuapp.com/strainapi.evanbusse.com/${process.env.REACT_APP_API_KEY}/strains/search/all`;

export const getDevilsLettuce = async() => {
  // eslint-disable-next-line max-len
  const res = await fetch(url);
  const someObject = await res.json();

  const map = new Map(Object.entries(someObject));

  console.log(map, 'testttttttttttttttttt');
  return map;
};
