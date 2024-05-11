import React from 'react';

import { MARGIN } from '@/components/SortableList/Config';
import Tile from '@/components/SortableList/Tile';
import SortableList from '@/components/SortableList/SortableList';
import { View } from 'react-native';

const tiles = [
  {
    id: 'spent',
  },
  {
    id: 'cashback',
  },
  {
    id: 'recent',
  },
  {
    id: 'cards',
  },
];

const WidgetList = () => {
  return (
    <View
      style={{
        paddingHorizontal: MARGIN,
        marginBottom: 80,
      }}>
      <SortableList
        editing={true}
        onDragEnd={(positions: any) => console.log(JSON.stringify(positions, null, 2))}>
        {[...tiles].map((tile, index) => (
          <Tile onLongPress={() => true} key={tile.id + '-' + index} id={tile.id} />
        ))}
      </SortableList>
    </View>
  );
};

export default WidgetList;