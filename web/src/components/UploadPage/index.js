import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import filesize from 'filesize';
import { Container, Content } from './styles';
import GlobalStyle from './global';

import api from '../../services/api';

import Upload from '../Upload';
import FileList from '../FileList';
// import { Container } from './styles';
//o componente filho usa o pattern render props, por isso mantive o mesmo no componente pai

export default class UploadPage extends Component {

  state = {
    uploadedFiles: []
  };

  handleUpload = files => {
    const uploadedFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      progress: 0,
      uploaded: false,
      error: false,
    }));

    this.setState({
      uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
    });

    uploadedFiles.forEach(this.processUpload);
  };

  updateFile = (id, data) => {
    this.setState({ uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
      return id === uploadedFile.id ? {...uploadedFile, ...data} : uploadedFile;
    }) })
  };

  processUpload = (uploadedFile) => {
    const data = new FormData();
    if(window.confirm(`Você quer fazer o upload do arquivo ${uploadedFile.name} para a base de dados? 
                                      Não se esqueça de seguir os padrões corretos conforme a base.`)){
      data.append('file', uploadedFile.file, uploadedFile.name);
      api.post('/upload', data, {
        onUploadProgress: e => {
          const progress = parseInt(Math.round((e.loaded * 100)/ e.total));

          this.updateFile(uploadedFile.id, {
            progress,
          })
        }
      }).then(response => {
        this.updateFile(uploadedFile.id, {
          uploaded: true,
          id: response.data._id,
        });
      }).catch(() => {
        this.updateFile(uploadedFile.id, {
          error: true,
        });
      });
    }
    
  };


  render() {
    const {uploadedFiles} = this.state;
    return  <Container>
              <Content>
                <Upload onUpload={this.handleUpload} />
                { !!uploadedFiles.length && (
                  <FileList files={uploadedFiles} />
                ) }
              </Content>
              <GlobalStyle />
            </Container>;
  }
}

