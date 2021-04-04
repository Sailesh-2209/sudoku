import React from 'react'
import { Heading } from '../components';
import {/* BiSun, */BiMoon } from 'react-icons/bi';
import {/* AiOutlineQuestion, */AiOutlineQuestionCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons';

export const HeadingContainer: React.FC = () => {
    return (
        <Heading>
            <Heading.Text>Sudoku</Heading.Text>
            <Heading.ButtonContainer>
                <IconContext.Provider value={{ color: "white", size: "32"}}>
                    <Heading.IconContainer>
                        <BiMoon />
                    </Heading.IconContainer>
                    <Heading.IconContainer>
                        <AiOutlineQuestionCircle />
                    </Heading.IconContainer>
                </IconContext.Provider>
            </Heading.ButtonContainer>
        </Heading>
    );
}