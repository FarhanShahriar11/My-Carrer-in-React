import React from 'react';

const JobCategory = ({Data}) => {
    const { logo,job,title } = Data
    return (
        <div className="card w-96 bg-base-100 ">
        <figure className="md:px-10 pt-10 ">
          <img src={logo} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{job}</p>
          
        </div>
      </div>
    );
};

export default JobCategory;