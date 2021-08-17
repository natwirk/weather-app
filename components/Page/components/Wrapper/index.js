import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  max-width: 1280px;
  padding: 0 2rem;
  margin: 0 auto;
`;

const Wrapper = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

Wrapper.propTypes = {
  children: PropTypes.element
};

export default Wrapper;
