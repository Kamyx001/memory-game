import './Board.css'
import Card from '../Card/Card'

const Board = ({ gridSize }: { gridSize: number }) => {
  return (
    <div className='board'>
      {Array(gridSize).fill(0).map((_, row) => (
        <div className='row' key={row}>
          {Array(gridSize).fill(0).map((_, index) => (
            <Card key={index + row * gridSize}> {index + row * gridSize} </Card>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;