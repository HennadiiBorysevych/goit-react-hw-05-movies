import styled from '@emotion/styled';
export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #fff;
    border-bottom: 1px solid #000;
`;
export const NavList = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
`;
export const NavListItem = styled.li`
    font-size: 20px;
    font-weight: 500;
    color: #000;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
        color: #2196f3;
    }
`;
