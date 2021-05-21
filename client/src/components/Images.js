import { useEffect, useState } from 'react';
import { getImage } from '../utils/imageService';
import { urlFor } from '../utils/imageUrl';
import styled from 'styled-components'

const StyledSection = styled.section`
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 100%;
margin: 0 auto;
padding: 1.5rem 0;
background: ${({ theme }) => theme.shift.body};
`;

const StyledCaption = styled.figcaption`
text-align: center;
`;

const StyledDiv = styled.div`

`;

const StyledImg = styled.img`
width: 100%;
`;

const Images = () => {
  const [bilder, setBilder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(bilder);

  useEffect(() => {
    const fetchImagesAsync = async () => {
      setLoading(true);
      try {
        const data = await getImage();
        setBilder(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchImagesAsync();
  }, []);

  return (
    <StyledSection>
        {loading? <p>Bilder lastes..</p> : null}
         {error? <p>Noe har skjedd: {error}</p> : null}
          {bilder?.length > 0 &&
          bilder.map((images) => (
              <StyledDiv>
              <StyledImg key={images.raw.image.asset._ref} src={urlFor(images?.raw?.image).width(550).format('webp').url()} alt={images.alt}/>
              <StyledCaption>{images.bildetekst}</StyledCaption>
              </StyledDiv>
          ))}
    </StyledSection>
  )
};
export default Images;
