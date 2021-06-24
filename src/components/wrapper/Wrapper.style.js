import styled from 'styled-components';

export const Wrapper = styled.section`
    align-items: ${props => props.alignItems ? props.alignItems : 'unset'};
    display: ${props => props.display ? props.display : 'block'};
    justify-content: ${props => props.justify ? props.justify : 'unset'};
    margin: ${props => props.margin ? props.margin : 0};
    padding: ${props => props.withPadding ? '10px 40px' : 0};
    width: ${props => props.width ? props.width : '100%'};
`;
