import './Board.css'
import Card from '../Card/Card'

const Board = ( { rows, cols }: { rows: number, cols: number } ) => {

  const cards = Array(rows * cols).fill(0).map((_, index) => index)
  console.log(cards)

  return (
    <div className='board'>
      {Array(rows).fill(0).map((_, row) => (
        <div className='row' key={row}>
          {Array(cols).fill(0).map((_, index) => (
            <Card key={index + row * cols}> {cards[index + row * cols]} </Card>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;