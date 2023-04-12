import React from 'react';
import { Link } from 'react-router-dom';

const SingleData = ({product}) => {
    const { category,location,name,picture,salary ,id} = product;
    return (
        <div className="card w-96 mx-auto bg-base-100 shadow-xl mt-12 border pt-6">
        <figure><img src={picture} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">
           {name}
            
          </h2>
          <p>{category}</p>
          <div className="card-actions justify-start">
            <div className="badge badge-outline">remote</div>
            <div className="badge badge-outline">Full-time</div>
            
          </div>
          
          
        </div>
       <div className='flex justify-between p-4'>
       <h3>{location}</h3>
        <p>{salary}</p>
       </div>
       <Link to={`/jobDetails/${id}`}> <button  className="btn btn-accent"> View details</button></Link>
      </div>
    );
};

export default SingleData;