import client from './client';

const imageFields = ` 
	bildetekst,
    'raw': image,  
`;

export const getImage = async () => {
  const imageData = await client.fetch(`*[_type == "bilder"]{${imageFields}}`);
  return imageData;
};
