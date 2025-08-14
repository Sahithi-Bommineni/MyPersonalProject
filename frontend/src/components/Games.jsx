import Header from './Header';
import Thumbnail from './Thumbnails';
import '../style/games.css';

const games = [
      { imgSrc: 'assets/ttt1.png', title: 'Tic Tac Toe', description:'Classic strategy game for two players. Get three in a row to win!', buttonText: "Let's Play" },
      { imgSrc: 'assets/ttt1.png', title: 'Number Guessing' },
      { imgSrc: 'assets/ttt1.png', title: 'Number Guessing' },
      { imgSrc: 'assets/ttt1.png', title: 'Number Guessing' },
      { imgSrc: 'assets/ttt1.png', title: 'Number Guessing' },
      { imgSrc: 'assets/ttt1.png', title: 'Number Guessing' }
  ];

function Games() {
  return (
    <div className="games-container">
      <Header/>
      <div className="games-list">
        {games.map((game, index) => (
          <div key={index} className="game-item">
            <Thumbnail 
              imgSrc={game.imgSrc}
              title={game.title}
              description={game.description}
              btn_content={game.buttonText} />
          </div>
        ))}
        {/* <div className="game-item">
          <Thumbnail 
            imgSrc={games[0].imgSrc}
            title={games[0].title}
            description={games[0].description} 
            btn_content={games[0].buttonText}/>
          <button className="play-button">Let's Play</button>
        </div> */}
      </div>
    </div>
  );
}

export default Games;

{/* {tictactoe.map((thumb, index) => (
      <Thumbnail key={index} imgSrc={thumb.imgSrc} 
      title={thumb.title} /> 
    ))} */}