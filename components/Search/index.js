import React from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';
import * as nextRouter from 'next/router';
import { useQuery } from '@apollo/client';
import Skeleton from 'react-loading-skeleton';
import { breakpoints } from '../../styles/breakpoints';
import { rotate } from '../../styles/keyframes';

const StyledSearch = styled.div`
  position: relative;
  max-width: 300px;
  @media ${breakpoints.sm} {
    max-width: 450px;
  }
`;

const StyledResults = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.background.primary};
  border-radius: 0 0 4px 4px;
  overflow: hidden;
`;

const StyledInput = styled.input`
  width: 300px;
  margin-top: 2rem;
  border: 0;
  background: 0;
  outline: 0;
  font-size: 3.2rem;
  padding: 1rem 0;
  color: ${({ theme }) => theme.color.primary};
  border-bottom: 2px solid ${({ theme }) => theme.color.primary};
  width: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.color.primary};
    opacity: 0.6;
  }
`;

const StyledItem = styled.li`
  width: 100%;
  background: ${({ theme }) => theme.background.primary};
  margin: 0;
  &:not(:last-child) {
    margin-bottom: 0.2rem;
  }
`;

const StyledLink = styled.button`
  display: block;
  width: 100%;
  padding: 1.5rem 1rem;
  border: 0;
  outline: 0;
  background: 0;
  text-align: left;
  color: ${({ theme }) => theme.color.primary};
  &:not(:disabled) {
    cursor: pointer;
  }
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const StyledLoader = styled.div`
  position: absolute;
  top: 4.25rem;
  right: 0;
  width: 2.5rem;
  height: 2.5rem;
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-right-color: transparent;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    width: 100%;
    height: 100%;
    border: 2px solid ${({ theme }) => theme.color.primary};
    opacity: 0.6;
    border-radius: 50%;
  }
`;

export const GET_CITIES = gql`
  query GetCities($query: String!) {
    cities(query: $query) {
      searchValue
      items {
        id
        name
        country
      }
    }
  }
`;

const Search = () => {
  const router = nextRouter.useRouter();
  const [query, setQuery] = React.useState('');
  let timeout;
  const { loading, error, data } = useQuery(GET_CITIES, {
    skip: !query,
    variables: {
      query
    }
  });
  const { cities } = data || {};
  const changePage = href => {
    router.push(`weather/${encodeURIComponent(href)}`);
  };
  const onClick = href => event => {
    event.preventDefault();
    changePage(href);
  };
  const onChange = event => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (event.target.value || event.target.value === '') {
        setQuery(event.target.value);
      }
    }, 500);
  };
  const onSubmit = event => {
    event.preventDefault();
    if (cities?.items?.length) {
      changePage(`${cities.items[0].name}, ${cities.items[0].country}`);
    }
  };

  return (
    <StyledSearch data-test="component-search">
      <form onSubmit={onSubmit}>
        <StyledInput
          type="text"
          placeholder="London, GB"
          onChange={onChange}
          data-test="input"
        />
        {loading && <StyledLoader data-test="loader" />}
      </form>
      {(loading || cities || error) && (
        <StyledResults>
          {loading && (
            <StyledList>
              <StyledItem>
                <StyledLink type="button" disabled aria-hidden="true">
                  <Skeleton width="100px" data-test="skeleton" />
                </StyledLink>
              </StyledItem>
              <StyledItem>
                <StyledLink type="button" disabled aria-hidden="true">
                  <Skeleton width="100px" data-test="skeleton" />
                </StyledLink>
              </StyledItem>
              <StyledItem>
                <StyledLink type="button" disabled aria-hidden="true">
                  <Skeleton width="100px" data-test="skeleton" />
                </StyledLink>
              </StyledItem>
            </StyledList>
          )}
          {!loading && cities?.items?.length > 0 && (
            <StyledList>
              {cities.items.map(item => (
                <StyledItem key={item.id}>
                  <StyledLink
                    type="button"
                    data-test="button"
                    onClick={onClick(`${item.name},${item.country}`)}
                  >
                    {item.name}, {item.country}
                  </StyledLink>
                </StyledItem>
              ))}
            </StyledList>
          )}
          {(error || cities?.items.length === 0) && (
            <StyledList>
              <StyledItem>
                <StyledLink type="button" disabled aria-hidden="true">
                  City not found.
                </StyledLink>
              </StyledItem>
            </StyledList>
          )}
        </StyledResults>
      )}
    </StyledSearch>
  );
};

export default Search;
