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

    const onSalvar = (evento)=> {
        evento.preventDefault()
        console.log("Form foi submetido")
    }

    return (
        <section className="formulario">
            <form onSubmit={onSalvar}>
                <h2>Preencha dos dados do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa obrigatorio={true} label ="Time" itens={Times}/>
                <Botao >Criar Card</Botao>
            </form>
        </section>
    )

}

export default Formulario