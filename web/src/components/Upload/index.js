import React, { Component } from 'react';

import Dropzone from 'react-dropzone';
 import { DropContainer, UploadMessage } from './styles';
//infelizmente a lib react-dropzone usa o pattern '.render() props' impossibilitando a implentação da api React Hooks

export default class Upload extends Component {
  render() {
    return (
      <Dropzone accept=".xlsx"
                onDropAccepted={() => {}}>
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}>
              <input {...getInputProps()} />
              Arraste e jogue o Excel aqui
            </DropContainer>
        )}
      </Dropzone>
    );
  }
}
