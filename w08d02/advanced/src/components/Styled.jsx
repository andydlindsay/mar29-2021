import styled from 'styled-components';
import Custom from './Custom';

const Styled = () => {
  const StyledH2 = styled.h2`
    color: turquoise;
    text-decoration: underline;
  `;

  const TakesProps = styled.p`
    background-color: ${(props) => props.pokemon ? 'magenta' : 'blue'};
    color: ${props => props.pokemon ? 'orange' : 'eggplant'}
  `;

  const Wrapped = styled(Custom)`
    color: hotpink;
    border: 2px dotted purple;
  `;

  return (
    <div>
      <h2>Styled Components</h2>
      <StyledH2>How do I look???</StyledH2>

      <TakesProps pokemon>Passed in the prop</TakesProps>
      <TakesProps>I don't like props</TakesProps>

      <Custom>I am not styled</Custom>
      <Wrapped>I am looking sooooo styled</Wrapped>
    </div>
  );
};

export default Styled;
