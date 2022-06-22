import React from "react";

const Pagination = (props) => {

    const{onAnteriorClick, onSiguienteClick, page, totalPages} = props;

    return (
        <div className="pagination">
            <button onClick={onAnteriorClick}>
                <div>Anterior</div>
            </button>

            <div>{page} de {totalPages}</div>
            
            <button onClick={onSiguienteClick}>
                <div>Siguiente</div>
            </button>
        </div>
    )
}

export default Pagination;