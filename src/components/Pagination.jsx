import React from "react";

const Pagination = (props) => {

    const {onAnteriorClick, onSiguienteClick, page, totalPages} = props;

    return (
        <div className="pagination">
            <button onClick={onAnteriorClick} className="btn-anterior">
                <div>Anterior</div>
            </button>

            <div className="paginas"><h2>{page} de {totalPages}</h2></div>

            <button onClick={onSiguienteClick} className="btn-siguiente">
                <div>Siguiente</div>
            </button>
        </div>
    )
}

export default Pagination;