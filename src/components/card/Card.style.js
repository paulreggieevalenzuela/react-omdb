import styled from 'styled-components';

export const Card = styled.div`
    background: #fff;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
	border-radius: 4px;
    margin: ${props => props.margin ? props.margin : 0};
    padding: ${props => props.withPadding ? '20px' : 0};
    width: ${props => props.width ? props.width : 'auto'};
`;
