import { Articulo } from "../Articulo";
import {Container} from './estilos'
import AppContext from '../../data/context/context' 

import {useContext }from 'react'

export const Articulos = () => {
    
    const { articulos } = useContext(AppContext)
    return (
        <Container>
            {
                articulos.map(prod => 
                    <Articulo key={prod.id} prod={prod} />
                )
            }
        </Container>
    )
}