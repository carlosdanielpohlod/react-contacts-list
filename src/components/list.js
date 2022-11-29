import React from 'react';
import ListElement from './list/listElement';
export default class List extends React.Component {
  render() {
    return (
      <div>
        <ListElement/>
        <ListElement/>
      </div>
    )
  }
}
