import React, { Component } from 'react';
import { Container, Content } from './styles';
import GlobalStyle from './global';

import Upload from '../Upload';

// import { Container } from './styles';
//o componente filho usa o pattern render props, por isso mantive o mesmo no componente pai

export default class UploadPage extends Component {
  render() {
    return  <Container>
              <Content>
                <Upload />
              </Content>
              <GlobalStyle />
            </Container>;
  }
}

