import PropTypes from 'prop-types';
import Wrapper from '../Wrapper';

const Main = ({ children }) => (
  <main>
    <Wrapper>{children}</Wrapper>
  </main>
);

Main.propTypes = {
  children: PropTypes.element
};

export default Main;
