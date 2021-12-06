import {Nav} from './estilos'
import { Carro } from '../Carro'
import { useContext } from 'react'
import Search from '../Search'
import AppContext from '../../data/context/context'

export const Navbar = () => {
    const { carrito, eliminardelCarrito } = useContext(AppContext)
    let cantidad = carrito.reduce((acum, actual) => acum + actual.cantidad, 0)
    return (
        <Nav >
            <p>Christopher</p>
            <Search/>  
            <Carro cantidad={cantidad} articulos={carrito} eliminardelcarrito={eliminardelCarrito}/>
        </Nav>
    )
}