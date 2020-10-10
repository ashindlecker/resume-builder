import React, { useEffect, useState } from 'react';
import Resume from './Resume';
import axios from 'axios'
import { ResumeDAO } from './dataobjects/ResumeDAO';
import { WorkExperienceDAO } from './dataobjects/WorkExperienceDAO';
import ResumeFetcher from './ResumeFetcher';



function App(props: { resumeFetcher: ResumeFetcher }) {
  const [resume, setResume] = useState(undefined as ResumeDAO | undefined);
  useEffect(() => {
    props.resumeFetcher.fetchResume().then((resume) => {
      setResume(resume)
    });
  }, [])
  return (
    <>
      {resume ? <Resume {...resume} /> : <div>loading</div>}
    </>
  );
}

export default App;
