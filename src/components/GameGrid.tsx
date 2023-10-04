
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';




const GameGrid = () => {
  const {games, error} = useGames(); 

 return (
  <> 
  {error &&  <Text>{error} </Text> }
  
  <SimpleGrid columns={{
    base: 1, 
    sm: 2, 
    lg:3, 
    xl:3
  }} 
  spacing={10} 
  padding="10px" 
  > 
    {games.map( game => (
      <GameCard key={game.id} game={game}  
      /> 
    ))}

   
  </SimpleGrid>
  </>
  )
}

export default GameGrid