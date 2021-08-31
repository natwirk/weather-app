import React, { useEffect, useRef, useState } from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';
import * as nextRouter from 'next/router';
import { useQuery } from '@apollo/client';
import Skeleton from 'react-loading-skeleton';
import { breakpoints } from '../../styles/breakpoints';
import { rotate } from '../../styles/keyframes';

const StyledSearch = styled.div`
  max-width: 300px;
  @media ${breakpoints.sm} {
    max-width: 450px;
  }

  ${({ active }) =>
    active &&
    `
  &:after {
    content: "";
    position: fixed;
    background: rgba(0, 0, 80, 0.2);
    display: block;
    width: ${window.innerWidth}px;
    height: ${window.innerHeight}px;
    top: 0;
    left: 0;
  `}
  }
`;

const StyledForm = styled.form`
  position: relative;
`;

const StyledResultsWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledResults = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  width: 100%;
  background: ${({ theme }) => theme.background.page};
  opacity: 0.98;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const StyledInput = styled.input`
  width: 300px;
  margin-top: 2rem;
  border: 0;
  background: 0;
  outline: 0;
  font-size: 3.2rem;
  padding: 1rem;
  color: ${({ theme }) => theme.color.primary};
  border-bottom: 2px solid ${({ theme }) => theme.color.primary};
  width: 100%;
  position: relative;
  z-index: 10;
  background ${({ theme }) => theme.background.page};
  &::placeholder {
    color: ${({ theme }) => theme.color.primary};
    opacity: 0.6;
  }
`;

const StyledItem = styled.li`
  width: 100%;
  margin: 0;
  background: ${({ theme }) => theme.background.primary};
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
  &:hover {
    background: ${({ theme }) => theme.background.primary};
  }
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  border-radius: 0 0 4px 4px;
  overflow: hidden;
  position: relative;
  z-index: 12;
`;

const StyledButton = styled.button`
  position: absolute;
  z-index: 20;
  top: 3.75rem;
  right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 0;
  border: 0;
  outline: 0;
  background: 0;
  cursor: pointer;
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 2.5rem;
    height: 0.2rem;
    top: 50%;
    left: 50%;
    display: block;
    background: ${({ theme }) => theme.color.primary};
  }
  &:before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

const StyledLoader = styled.div`
  position: absolute;
  z-index: 20;
  top: 3.75rem;
  right: 1rem;
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
  const [input, setInput] = useState({
    value: '',
    resultsVisible: false
  });
  const [query, setQuery] = useState('');
  let timeout = useRef(null);
  const { loading, error, data } = useQuery(GET_CITIES, {
    skip: !query,
    variables: {
      query
    }
  });
  const { cities } = data || {};

  useEffect(() => {
    clearTimeout(timeout.current);
    if (input.value !== '') {
      timeout.current = setTimeout(() => {
        setQuery(input.value);
      }, 500);
    }
  }, [input]);

  useEffect(() => {
    return () => clearTimeout(timeout.current);
  }, []);

  const changePage = href => {
    router.push(`weather/${encodeURIComponent(href)}`);
  };
  const handleClick = href => event => {
    event.preventDefault();
    changePage(href);
  };
  const handleChange = event => {
    const value = event.target.value;
    if (value !== '') {
      setInput({
        resultsVisible: true,
        value
      });
      return;
    }
    setInput({
      resultsVisible: false,
      value
    });
  };
  const onSubmit = event => {
    event.preventDefault();
    if (cities?.items?.length) {
      changePage(`${cities.items[0].name}, ${cities.items[0].country}`);
    }
  };

  const clear = () => {
    setInput({
      value: '',
      resultsVisible: false
    });
  };

  return (
    <StyledSearch data-test="component-search" active={input.value}>
      <StyledForm onSubmit={onSubmit}>
        <StyledInput
          type="text"
          placeholder="London, GB"
          onChange={handleChange}
          data-test="input"
          value={input.value}
        />
        {!loading && input.resultsVisible && (
          <StyledButton type="button" onClick={clear}>
            Clear
          </StyledButton>
        )}
        {loading && <StyledLoader data-test="loader" />}
      </StyledForm>
      {input.resultsVisible && (loading || cities || error) && (
        <StyledResultsWrapper>
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
                      onClick={handleClick(`${item.name},${item.country}`)}
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
        </StyledResultsWrapper>
      )}
    </StyledSearch>
  );
};

export default Search;
