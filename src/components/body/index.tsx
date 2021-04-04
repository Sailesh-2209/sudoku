import React from 'react';
import { Container, Heading, HeadingText } from './styles/body';

type props = {
    children: JSX.Element | string;
}

const Body = ({ children }: props) => {
    return <Container>{children}</Container>
}

Body.HeadingContainer = function BodyHeadingContainer({ children }: props) {
    return <Heading>{children}</Heading>
}

Body.HeadingText = function BodyHeadingText({ children }: props) {
    return <HeadingText>{children}</HeadingText>
}

export default Body;