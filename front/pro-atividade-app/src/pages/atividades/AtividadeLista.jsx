import React from 'react'
import AtividadeItem from "./AtividadeItem";

export default function AtividadeLista(props) {
    return (
        <div className="mt-3">
            {props.atividades.map((ativ) => (
                <AtividadeItem
                    key={ativ.id}
                    ativ={ativ}
                    handleConformModal ={props.handleConformModal}
                    pegarAtividade={props.pegarAtividade} />
            ))}
        </div>
    )
}
