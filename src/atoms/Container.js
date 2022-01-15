import styled from 'styled-components';

const Container = styled.View`
    backgroundColor: #FFFFFF;
    flex: 1;
    justify-content:${(props)=> props.justifyContent != null? props.justifyContent:'center'};
    align-items:${(props)=> props.alignItems != null? props.alignItems:'flex-start'};
    padding:16px;
`
export default Container;