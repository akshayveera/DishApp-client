
import React, { useEffect } from 'react'

const App = () => {

    const [flag, setFlag] = useState(false);
    const [info, setInfo] = useState(null);

    useEffect(()=>{
        getData();
    }, []);

    async function getData(){

        const data = await fetch("https://dishapp-server.onrender.com");
        const json = await data.json();

        setInfo(json);
    }

    const item = {
        "dishName": "Jeera Rice",
        "dishId": "1",
        "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/jeera-rice.jpg",
        "isPublished": true
        };
  return (
    <section>
        <h1 className='text-center text-4xl font-semibold'>DashBoard</h1>

        <div>
            {info.map((item)=>(

                <div key={item?.dishId} className='flex flex-col w-fit items-center gap-3 bg-purple-100 rounded-lg p-5 shadow-lg'>
                    <img className='h-[200px] rounded-lg' src={item?.imageUrl} alt="" />

                    <p className='text-xl font-semibold text-purple-900'>{item?.dishName}</p>

                    <button className='w-[70px] h-[30px] bg-purple-900 rounded-full flex items-center justify-start'><div className='bg-white h-[27px] w-[27px] rounded-full'></div></button>
                </div>

            ))}
        </div>
    </section>
  )
}

export default App