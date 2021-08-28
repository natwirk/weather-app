import Page from '../components/Page';
import styled from 'styled-components';
import Search from '../components/Search';
import { StyledHeading } from '../components/Typography';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10%;
`;

const Home = () => {
  return (
    <Page>
      <StyledWrapper>
        <StyledHeading>Search city...</StyledHeading>
        <Search />
      </StyledWrapper>
    </Page>
  );
};

export default Home;
