
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError } from 'react-icons/md';

import { Container, FileInfo} from './styles';

import React, { Component } from 'react';

// import { Container } from './styles';

const FileList = ({ files }) => (
  <Container>
      {files.map(uploadedFile => (
        <li key={uploadedFile.id}>
        <FileInfo>
          <div>
            <strong>{uploadedFile.name}</strong>
            <span>
              {uploadedFile.readableSize}
              {uploadedFile.uploaded	&& <button onClick={() => {}}>Excluir</button>}
              </span>
          </div>
        </FileInfo>

        <div>
          {!uploadedFile.uploaded && !uploadedFile.error && (
            <CircularProgressbar
            styles={{
              root: { width: 24 },
              path: { stroke: '#78e5d5'},
            }}
            strokeWidth={10}
            percentage={uploadedFile.progress}
            />
          )}
          {uploadedFile.uploaded && <MdCheckCircle size={24} color="#78e5d5" />}
          {uploadedFile.error && <MdError size={24} color="#e57878" />}
        </div>
      </li>
      ))}
    </Container>
);

export default FileList;
