import {useRef,useContext } from 'react'
import AppContext from '../../data/context/context.js';

import { Container, Input } from './estilos.js'



const Search = () => {
    const q = useRef(null);
    const {buscarArticulo} = useContext(AppContext);
    const onChange = () =>{
        buscarArticulo(q.current.value);
    }
    return (
        <Container>
            <Input
                placeholder='Buscar...'
                type='text'
                onChange={onChange}
                ref={q}
            />
        </Container>
    )
}

export default Search
