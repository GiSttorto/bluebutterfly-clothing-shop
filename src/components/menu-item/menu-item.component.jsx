import React from 'react';
import { MenuItemContainer, BackgroundImage, Content, Title, SubTitle } from './menu-item.styles';
import { withRouter } from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
	<MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImage imageUrl={imageUrl} />
    <Content className='content'>
      <Title className='title'>{title.toUpperCase()}</Title>
      <SubTitle className='subTitle'>SHOP NOW</SubTitle>
    </Content>
	</MenuItemContainer>
)

export default withRouter(MenuItem);