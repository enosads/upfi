import {SimpleGrid, useDisclosure} from '@chakra-ui/react';
import {useState} from 'react';
import {ModalViewImage} from './Modal/ViewImage';
import {Card} from "./Card";

interface CardType {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: CardType[];
}

export function CardList ({cards}: CardsProps): JSX.Element {
  const {isOpen, onClose, onOpen} = useDisclosure();

  const [imgUrl, setImgUrl] = useState('');

  function handleViewImage (url: string): void {
    onOpen();
    setImgUrl(url);
  }

  return (
    <>

      <SimpleGrid spacing='40px' minChildWidth='250px'>
        {cards.map(card => (
          <Card key={card.id} data={card} viewImage={handleViewImage}/>
        ))}
      </SimpleGrid>

      <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={imgUrl}/>
    </>
  );
}
