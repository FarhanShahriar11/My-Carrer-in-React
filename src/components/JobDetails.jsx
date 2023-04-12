import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { addToDb } from '../utils/fakeDB';

const JobDetails = () => {
    const [details, setDetails] = useState({})
    const { id } = useParams();
    useEffect(() => {
        const getData = async () => {
            const res = await fetch('/products.json')
            const data = await res.json();
            const detail = data?.find(detailJob => detailJob.id === id);
            setDetails(detail)
        }

        getData()
    }, [])
    
   
    const handleAdd=(id)=>{
       
     addToDb(id)
    }
    return (
       
            <section>
                <h1 className='font-bold text-3xl text-center ms-3'>Job Details</h1>
        <div className='flex my-container  '>
            <div className="card w-8/12 glass">
                <div className='p-4'>
                <h1 className='p-2'><span className='font-bold'>Job Description:</span> {details.description}</h1>
                <h1 className='p-2'><span className='font-bold'>Job Responsibility:</span> {details.responsibility}</h1>
                <h1 className='p-2'><span className='font-bold'>Educational Requirements: </span> {details.requirements}</h1>
                <h1 className='p-2'><span className='font-bold'>Experiences:</span> {details.experience}</h1>
                </div> 
</div>
<div className="card w-96 glass">
    <div>
    <h1 className='p-2'><span  className='font-bold'>Job details</span></h1>
    <h1 className='p-2'><span  className='font-bold'>Salary :</span>{details.salary}</h1>
    <h1 className='p-2'><span  className='font-bold'>Job Title: </span>{details.jobTitle}</h1>
    <h1 className='p-2 font-bold'>Contact Information</h1>
    <h1 className='p-2'><span  className='font-bold'>Phone: </span>{details.phone}</h1>
    <h1 className='p-2'><span  className='font-bold'>Email: </span>{details.email}</h1>
    <h1 className='p-2'><span  className='font-bold'>Address: </span>{details.address}</h1>
    </div>
  <div className="card-body">
    <div className="card-actions justify-center ">
 <button onClick={()=>handleAdd(id)} className="btn btn-primary w-full">Apply Now</button>
    </div>
  </div>
</div>
        </div>
        </section>
    );
};

export default JobDetails;