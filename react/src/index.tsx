import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HttpResumeFetcher from './HttpResumeFetcher';
import MockResumeFetcher from './MockResumeFetcher';

const fetcher = (process.env.NODE_ENV === 'production' ?
  new HttpResumeFetcher('http://localhost:3000/print') :
  new MockResumeFetcher({
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
    name: 'John Doe',
    email: 'example@example.com',
    experience: [
      {
        start: new Date('03/1/2018'),
        company: 'Company Name 3',
        title: 'Full Stack Engineer',
        duties: [
          `Implemented React to deliver a responsive website for customers to interact with our services`,
          `Developed microservices using Node.js, TypeScript, and express`,
          `Utilized Docker to containerize our microservices to easily deploy on Amazon Web Services (AWS)`
        ]
      },
      {
        start: new Date('01/1/2017'),
        end: new Date('02/1/2018'),
        company: 'Company Name 2',
        title: 'Full Stack Engineer',
        duties: [
          `Job Dutie 1`,
          `Job Dutie 2`,
          `Job Dutie 3`
        ]
      }
    ]
  }));

ReactDOM.render(
  <React.StrictMode>
    <App resumeFetcher={fetcher}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
