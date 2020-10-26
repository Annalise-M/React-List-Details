// import { process } from 'react';

// eslint-disable-next-line max-len

export const getDevilsLettuce = async() => {
  const url = 'http://strainapi.evanbusse.com/om64cX9/strains/search/all';
  // eslint-disable-next-line max-len
  //const url = 'http://strainapi.evanbusse.com/om64cX9/strains/search/name/NAME';
  // eslint-disable-next-line max-len
  const res = await fetch(url);
  const someObject = await res.json();
  //const testing = JSON.stringify(someObject[]);
  // const map = new Map(Object.entries(someObject));

  return someObject;
};

export const fetchLettuceDetails = async(id) => {
  // eslint-disable-next-line max-len
  const url = fetch(`http://strainapi.evanbusse.com/om64cX9/strains/data/desc/${id}`);

  const res = await fetch(url);
  const someDetails = await res.json();
  // .then (response => response.json())
  // .catch (error => console.log('error', error));
  return someDetails;
};
