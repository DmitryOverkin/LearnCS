
const PaginationTools = (props) => {
    return (
        <div className="pagination-tools__container">
            <button onClick={props.prevPage}>{'<'}</button>
            {props.page}
            <button onClick={props.nextPage}>{'>'}</button>
        </div>
    )
}

export default PaginationTools;