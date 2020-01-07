import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


import {
  Card,
  Content,
  Title,
  Top,
  CenterContent,
  Item,
  ItemLeft,
  BaseButton,
  ItemRight
} from '../../global/styles.global';

import {

} from './styles';

const Detalhes = () => {
    return (
      <Content>
        <Card>
          <BaseButton>
            <Icon name="arrow left" color="blue"/>
            <Link to="/">
              Voltar
            </Link>
          </BaseButton>
        </Card>
        <Top>
          <Title></Title>
        </Top>
      </Content>
    )
  };


export default Detalhes;
