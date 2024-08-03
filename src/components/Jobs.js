import React from 'react'
import Jobsearchland from './Jobsearchland';
import JobsFilter from './JobsFilter';
import Footer  from './Footer';

const Jobs = () => {
  return (
    <div className="grid grid-cols-[1fr,3fr,1fr] bg-compback">
        <div className=" my-4">
        <JobsFilter/>
    </div>
    
    </div>
  )
}

export default Jobs;