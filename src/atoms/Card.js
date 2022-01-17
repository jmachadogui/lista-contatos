import styled from "styled-components";

const Card = styled.View`
    background-color: #FFFFFF,
    borderWidth: 1px;
    borderColor: #E0E0E0;
    borderRadius: 8px;
    flex: ${props => props.flex != null? props.flex:'none'};
    padding:16px;
    background-color: #FFFFFF
`
export default Card;