import React from 'react';

const If = (props) => {
    if(!props.test)
        return null;
    else return  <>
        {props.children}
    </>
}

export default If;