import React from 'react';
import { Container, Text, ButtonContainer, IconContainer } from './styles/heading';

type Props = {
    children: JSX.Element[] | string | JSX.Element;
    restProps?: object;
}

const Heading = ({ children, ...restProps }: Props) => {
    return(
        <Container {...restProps} >{children}</Container>
    );
}

Heading.Text = function HeadingText ({ children, ...restProps }: Props) {
    return(
        <Text {...restProps}>{children}</Text>
    );
}

Heading.ButtonContainer = function HeadingButtonContainer ({ children, ...restProps }: Props) {
    return(
        <ButtonContainer {...restProps}>{children}</ButtonContainer>
    );
}

Heading.IconContainer = function HeadingIconContainer ({ children, ...restProps }: Props) {
    return (
        <IconContainer {...restProps}>{children}</IconContainer>
    );
}

export default Heading;