import React from 'react';
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: antiquewhite;
`

const Container = ({title}) => {
    return (
        <Div>
            <span>{title}</span>
        </Div>
    );
};

export default Container;