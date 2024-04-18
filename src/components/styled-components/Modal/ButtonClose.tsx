import styled from 'styled-components';

export const ButtonClose = styled.button`
    box-sizing: content-box;
    width: 1em;
    height: 1em;
    padding: .25em .25em;
    color: #000;
    background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;
    border: 0;
    border-radius: .375rem;
    opacity: 0.5;
    filter: invert(1) grayscale(100%) brightness(200%);
    text-transform: none;
    padding: calc(1rem * .5) calc(1rem * .5);
    margin: calc(-.5 * 1rem) calc(-.5 * 1rem) calc(-.5 * 1rem) auto;
    cursor: pointer;

    &:hover {
        text-decoration: none;
        opacity: 0.75;
    }

    &:focus:not(:focus-visible) {
        outline: 0;
    }

    &:focus {
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
        opacity: 1;
    }

    &:disabled {
        opacity: 0.25;
    }

`;