
 import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getNav } from '../utils/navService';
import styled from 'styled-components';

const StyledSection = styled.section`
margin-top: 3rem;
`;

const StyledUl = styled.ul`
display: flex;
flex-direction: row;
width: fit-content;
align-items: center;
background: ${({ theme }) => theme.mycolors.boxes};
list-style: none;
padding: 0;
li{
  list-style: none;
  padding: 5px 10px;
  
}
  a{
    text-decoration: none;
    list-style: none;
    color: ${({ theme }) => theme.mycolors.text};
    font-size: 1.8rem;
    font-weight: 400;
    padding: 5px;
    font-family: 'Raleway', sans-serif;
    :hover{
      text-decoration: underline;
    }
}
`;

const Navigation = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  /* henter nav-data fra sanity */
  useEffect(() => {
    const fetchDataAsync = async () => {
      setLoading(true);
      try {
        const navigation = await getNav('header');
        setData(navigation);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDataAsync();
  }, []);

  return (
    <StyledSection>
      {error? <p>Ooops, noe har skjedd</p> : null}
      {loading? <p>Menyene laster inn..</p> : null}
      <StyledUl>
        {data?.link?.length > 0 &&
        data?.link?.map((nav) => (
          <li key={nav._key}> <NavLink exact to={`/${nav.href}`} activeClassName="active">
          {nav.name}</NavLink>
          </li>
        ))
        }
      </StyledUl>
    </StyledSection>

  );
};
export default Navigation;
