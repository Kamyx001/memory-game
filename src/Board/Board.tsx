import './Board.css'
import Card from '../Card/Card'
import shuffle from '../functions/shuffle'

const Board = ( { rows, cols }: { rows: number, cols: number } ) => {

  const cards = Array(rows * cols).fill(0).map((_, index) => Math.ceil((index+1)/2))
  const isTurned: boolean[] = Array(rows * cols).fill(false)
  const pair: {index: number, key: number}[] = []
  console.log(cards)
  shuffle(cards)

  const changeTurned = (index: number) => {
    console.log(index)
    if (isTurned[index] === false) pair.push({index: index, key: cards[index]})
    if (isTurned[index] === true) {
      for( var i = 0; i < pair.length; i++){ 
        if ( pair[i].index === index) {  
            pair.splice(i, 1); 
        }
      }
    }
    isTurned[index] = !isTurned[index]
    checkPair()
    console.log(pair)
    console.log(isTurned)
    
  }

  const checkPair = () => {
    if (pair.length === 2) {
      if(pair[0].key === pair[1].key)
        console.log('pair')
      else {
        pair.forEach(({ index }) => {
          isTurned[index] = false;
        });      }
      pair.length = 0;
      console.log('not pair')
    }
  }

  return (
    <div className='board'>
      {Array(rows).fill(0).map((_, row) => (
        <div className='row' key={row}>
          {Array(cols).fill(0).map((_, index) => (
            <Card index={index + row * cols} changeTurned={changeTurned}>
            {cards[index + row * cols]}
          </Card>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;