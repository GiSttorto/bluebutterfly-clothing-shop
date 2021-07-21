import React from 'react';
import { CollectionItemContainer, Image, CollectionFooter, AddButton } from './collection-item.styles';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({item, addItem }) => {
  const {name, price, imageUrl  } = item;

  return (
    <CollectionItemContainer>
      <Image className='image' image={imageUrl} />
      <CollectionFooter>
        <span style={{ width: '90%', marginBottom: '15px' }}>{name}</span>
        <span style={{ width: '13%'}}>€ {price}</span>
      </CollectionFooter>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
