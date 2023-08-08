import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'


const Formulario = () => {

    const Times = [
        'Programação',
        'Front-End',
        'Data Science', 
        'Dev Ops',
        'UX',
        'Mobile',
        'Inovação e Gestão'
    ]



    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')

    const onSalvar = (evento)=> {
        evento.preventDefault()
        console.log("Form foi submetido", nome, cargo, imagem)
    }

    return (
        <section className="formulario">
            <form onSubmit={onSalvar}>
                <h2>Preencha dos dados do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa obrigatorio={true} label ="Time" itens={Times}/>
                <Botao >Criar Card</Botao>
            </form>
        </section>
    )

}

export default Formulario