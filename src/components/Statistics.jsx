import React, { useEffect, useState } from 'react';
import image from '../assets/All Images/P3OLGJ1 copy 1.png'
import JobCategory from './JobCategory';
import { useLoaderData } from 'react-router-dom';
import SingleData from './SingleData';





const Statistic = () => {
   const [category,setCategory]=useState([])
  const [showAll,setShowAll]=useState(false);
    const [data,setData]=useState([]);
const handleShowAll=()=>{
  setShowAll(true);
}
    useEffect(()=>{
     const loadData=async()=>{
       const res=await fetch('fakeData.json');
       const value=await res.json();
      // console.log(value)
       setData(value);
     }
     loadData();
    },[]);

    
    useEffect(()=>{
      const loadCategoryData=async()=>{
        const resCategory=await fetch('products.json');
        const val=await resCategory.json();
        console.log(value)
       setCategory(val);
      }
      loadCategoryData();
     },[]);

    return (
       <section>
         <div className='md:my-container md:flex justify-items-center items-center'>
      <div  >
        <h1 className='m-8 font-bold'>One Step Closer To Your Dream Job</h1>
        <p className='m-8'>Explore thousands of job opportunities with all the information you need. Its your future.
          Come find it. Manage all your job application from start to finish.</p>
        <button className="btn btn-success m-8">Success</button>
      </div>
      <div >
        <img  src={image} alt="" />
      </div>
      </div>
      <div className='grid  md:grid-cols-2 lg:grid-cols-4 ' >
        {
            data.map((Data)=>{
             //console.log(Data);
             return<JobCategory Data={Data} key={Data.id}
             >
              
             </JobCategory>
             

            })
        }
      </div>
      <div>
      <h1 className='text-center font-bold text-3xl mt-4'>Feature job</h1>
    </div>
      <div className='md:my-container grid  md:grid-cols-2 lg:grid-cols-2 '>
         {
           category.slice(0,showAll?6:4).map(product=>(
           // console.log(product);
            <SingleData product={product}
             key={product.id}
            
              ></SingleData>
          
           ))
         }
      </div>

     <div className=' flex justify-center' onClick={handleShowAll} >
     <button className='border bg-green-500 p-2 rounded text-right  '>show all</button>
     </div>
       </section>
    );
};

export default Statistic;