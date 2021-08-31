import Page from '../components/Page';
import styled from 'styled-components';
import Search from '../components/Search';
import CitiesList from '../components/CitiesList';
import { StyledHeading, StyledText } from '../components/Typography';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 8%;
`;

const Home = () => {
  const hasApiKey = process.env.NEXT_PUBLIC_HAS_API_KEY === '1';
  return (
    <Page>
      <StyledWrapper>
        {hasApiKey ? (
          <>
            <StyledHeading>Search city...</StyledHeading>
            <Search />
          </>
        ) : (
          <>
            <StyledHeading>Demo Mode</StyledHeading>
            <StyledText>Please select from cities below:</StyledText>
          </>
        )}
        <CitiesList />
      </StyledWrapper>
    </Page>
  );
};

export default Home;
