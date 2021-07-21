import React from 'react';
import { DirectoryMenu } from './directory.styles';
import MenuItem from '../menu-item/menu-item.component';
import { connect  } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

const Directory = ({sections}) => (
  <DirectoryMenu>
    {
      sections.map(({id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))
    }
  </DirectoryMenu>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);