import React, {
  Component
} from 'react';
import StackGrid from 'react-stack-grid';
import { Link } from 'react-router-dom';

import Hero from '@/components/hero';

import './landing.scss';

export default class Landing extends Component {
  render() {
    return (
      <StackGrid
        columnWidth={150}
      >
        <div key="key1">Item 1</div>
        <div key="key2">Item 2</div>
        <div key="key3">Item 3</div>
      </StackGrid>
    );
  }
}
