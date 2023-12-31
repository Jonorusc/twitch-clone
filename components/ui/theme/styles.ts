import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 0.5rem;
    user-select: none;
    color: ${theme.palette.text.base};
    font-size: ${theme.font.size.xsmall};
    border-radius: 0.5rem;
    &:hover {
      background: ${theme.palette.surface};
    }
  `};
`

export const List = styled(motion.ul).attrs({
  initial: { opacity: 0, y: -15 },
  animate: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: -15
  }
})<{ $x: number; $y: number }>`
  ${({ theme, $x, $y }) => css`
    position: fixed;
    display: flex;
    top: ${$y}px;
    left: ${$x}px;
    background-color:;
    flex-direction: column;
    gap: 1rem;
    background-color: ${theme.name === 'light'
      ? theme.palette.white
      : theme.palette.dark};
    transition: background 100ms ease-in;
    list-style: none;
    padding: 1rem;
    border-radius: 0.5rem;
    margin: 0;
    li {
      margin-right: 1rem;
    }
  `};
`
export const ListItem = styled.button`
  ${({ theme }) => css`
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: ${theme.font.size.xsmall};
    color: ${theme.palette.text.base};
    font-weight: ${theme.font.semiBold};
    padding: 0.5rem 1.3rem;
    border-radius: 0.5rem;
    transition: background 100ms ease-in;
    cursor: pointer;

    &:hover {
      background: ${theme.palette.surface};
    }
  `};
`
