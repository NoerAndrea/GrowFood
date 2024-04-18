import styled from 'styled-components';

export const FloatButton = styled.button`
    position: fixed;
    right: 45px;
    bottom: 45px;
    width: 60px;
    height: 60px;
    border: 0;
    border-radius: 50%;
    font-size: 1.75rem;
    background-color: #000000;
    color: #fff;

    &:hover {
        background-color: #3a3a3a;
        color: #020202;
        cursor: pointer;
    }
`;