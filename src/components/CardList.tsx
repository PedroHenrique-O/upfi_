/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { onOpen, isOpen, onClose } = useDisclosure();

  const [currentImageUrl, setCurrentImageUrl] = useState('');

  const handleViewImage = (url: string) => {
    onOpen();
    setCurrentImageUrl(url);
  };

  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {cards.map(item => (
          <Card key={item.id} data={item} viewImage={handleViewImage} />
        ))}
      </SimpleGrid>
      <ModalViewImage
        isOpen={isOpen}
        imgUrl={currentImageUrl}
        onClose={onClose}
      />
    </>
  );
}
