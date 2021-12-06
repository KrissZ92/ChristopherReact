
import styled from 'styled-components'

export const Container= styled.div `
    position: relative
`
export const Button = styled.button`
    border: none;
    background-color: #118002;
    color: #fff;
    border-radius: 5;
    padding: 12px 15px;
    cursor: pointer;
`

export const ListArticulos= styled.div`
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    color: #000;
    background-color: #fff;
    right: 0;
    position: absolute;
    padding: 10px;
    width: 400px;
    top: 50px;
`

export const Ul= styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`
export const Li = styled.li`
    align-items: center;
    border-bottom: 1px dashed #ccc;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding-bottom: 5px;
`
export const DeleteButton= styled.button`
    border: none;
    background-color: #fb0207;
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    font-size: 0.6em;
    padding: 2px 5px;
`

/**
 * Tarea:
 * 1- Eliminar un producto del carrito (junto con sus cantidades), bajo previa confirmación (confirm)
 * 2- Investigar el hook useEffect
 * 3- Investigar el hook useRef
 * 4- Investigar el hook useContext
 * 5- Aplicar los tres hooks anteriores al proyecto.
 */

/**
 * Django Rest Framework
 * .Net Framework / .Net Core
 */