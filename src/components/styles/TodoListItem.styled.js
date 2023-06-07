import styled from "styled-components";
import img from '../../assets/imagesampleone.jpg'

export const StyleTodoListItem = styled.li`
    color: red;
    margin: 10px;

    display: flex;
    align-items: center;
    /* bg can be relate to todo item */
    background-image: url(${img});
    /* background-color: #fff; */
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin: 10px;
    padding: 20px;

`
