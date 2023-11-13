
/***
 * Este es el componente cuadricula
 *  
 */
export const Square = ({ children, isSelected, updateBoard, index }) => {
    /* renderizado condicional para saber quien le toca poniendo azul el q le toca */
    const className = `square ${isSelected ? 'is-selected' : ''}`;
    
    const handlerClick = () => {
      updateBoard(index)
    }
  
    return (
      <div onClick={handlerClick} className={className}>
        {children}
      </div>
    )
  }