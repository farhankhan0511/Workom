import React from 'react';

const JobsFilter = () => {
  return (
    <div className="p-4 bg-white space-y-4">
      {/* Filters Section */}
      <div className="flex flex-col space-y-2">
        <h1 className="font-bold text-lg">Filters</h1>
        <ul className="space-y-2">
          <li>
            <input id="remote-job" type="checkbox" className="mr-2" />
            <label htmlFor="remote-job">Remote job</label>
          </li>
          <li>
            <input id="exact-location" type="checkbox" className="mr-2" />
            <label htmlFor="exact-location">Exact location</label>
          </li>
          <li>
            <input id="within-15km" type="checkbox" className="mr-2" />
            <label htmlFor="within-15km">Within 15km</label>
          </li>
          <li>
            <input id="within-50km" type="checkbox" className="mr-2" />
            <label htmlFor="within-50km">Within 50km</label>
          </li>
        </ul>
      </div>

      {/* Date of Posting Section */}
      <div className="flex flex-col space-y-2">
        <h1 className="font-bold text-lg">Date of Posting</h1>
        <ul className="space-y-2">
          <li>
            <input id="all-time" type="checkbox" className="mr-2" />
            <label htmlFor="all-time">All time</label>
          </li>
          <li>
            <input id="last-24-hours" type="checkbox" className="mr-2" />
            <label htmlFor="last-24-hours">Last 24 hours</label>
          </li>
          <li>
            <input id="last-3-days" type="checkbox" className="mr-2" />
            <label htmlFor="last-3-days">Last 3 days</label>
          </li>
          <li>
            <input id="last-7-days" type="checkbox" className="mr-2" />
            <label htmlFor="last-7-days">Last 7 days</label>
          </li>
        </ul>
      </div>

      {/* Work Experience Section */}
      <div className="flex flex-col space-y-2">
        <h1 className="font-bold text-lg">Work Experience</h1>
        <ul className="space-y-2">
          <li>
            <input id="any-experience" type="checkbox" className="mr-2" />
            <label htmlFor="any-experience">Any experience</label>
          </li>
          <li>
            <input id="internship" type="checkbox" className="mr-2" />
            <label htmlFor="internship">Internship</label>
          </li>
          <li>
            <input id="work-remotely" type="checkbox" className="mr-2" />
            <label htmlFor="work-remotely">Work remotely</label>
          </li>
        </ul>
      </div>

      {/* Type of Employment Section */}
      <div className="flex flex-col space-y-2">
        <h1 className="font-bold text-lg">Type of Employment</h1>
        <ul className="space-y-2">
          <li>
            <input id="full-time" type="checkbox" className="mr-2" />
            <label htmlFor="full-time">Full time</label>
          </li>
          <li>
            <input id="temporary" type="checkbox" className="mr-2" />
            <label htmlFor="temporary">Temporary</label>
          </li>
          <li>
            <input id="part-time" type="checkbox" className="mr-2" />
            <label htmlFor="part-time">Part-time</label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JobsFilter;
