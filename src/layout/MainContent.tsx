import React, { FC, ReactNode } from "react";
import styled from "styled-components";

const MainContent:FC<{children: ReactNode}> = (props) => {
    return <Container>
        {props.children}
    </Container>
}

const Container = styled.div`
  margin: 0 30%;
  background-color: #6e5264;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default MainContent
