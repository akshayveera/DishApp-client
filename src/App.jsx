
import React, { useEffect, useState } from 'react'
import DishCard from './DishCard';

const App = () => {

    const [info, setInfo] = useState(null);

    useEffect(()=>{
        getData();
    }, []);

    async function getData(){

        const data = await fetch("https://dishapp-server.onrender.com");
        const json = await data.json();

        setInfo(json);
    }

    if(!info){
        return (
          <section className='flex flex-col items-center bg-gradient-to-tr from-red-100 to-blue-200 min-h-[100vh]'>
              <h1 className='text-center text-4xl font-semibold py-5 my-10 w-[60%] rounded-lg text-purple-900 bg-purple-100'>DashBoard</h1>
          </section>
      );
    }
        

  return (
    <section className='flex flex-col items-center justify-center bg-gradient-to-tr from-red-100 to-blue-200'>
        <h1 className='text-center text-4xl font-semibold py-5 my-10 w-[60%] rounded-lg text-purple-900 bg-purple-100'>DashBoard</h1>

        <div className='flex flex-wrap items-center justify-evenly gap-y-10'>
            {info.map((item)=>(
                <DishCard key={item?.dishId} item={item}/>
            ))}
        </div>
    </section>
  )
}

export default App