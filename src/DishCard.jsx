
import React, {useState} from 'react'

const DishCard = ({item}) => {

    const [flag, setFlag] = useState(item?.isPublished);

    const dishId = item?.dishId;

    async function updateServer(DISHID, flag){
        try {
            const response = await fetch('https://dishapp-server.onrender.com/', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                "dishId": DISHID,
                "isPublished": !flag
              }),
            });
      
            const result = await response.json();
            if (response.ok) {
              console.log('Update successful:', result);
            } else {
              console.error('Update failed:', result.message);
            }
          } catch (error) {
            console.error('Error updating dish:', error);
          }
    }

  return (
    <div key={item?.dishId} className={'flex flex-col w-fit items-center gap-3  rounded-lg p-5 shadow-lg m-2 ' + ( flag ? "bg-purple-100 " : "bg-gray-200")} >
        <img className='h-[200px] w-[350px] object-cover w- rounded-lg' src={item?.imageUrl} alt="" />

        <p className='text-xl font-semibold text-purple-900'>{item?.dishName}</p>

        <div className='flex gap-2 items-center'>

            <span className='text-xs font-semibold text-purple-900'>true</span>
                <button className={'w-[70px] h-[30px] bg-purple-900 rounded-full flex items-center ' + ( !flag && " justify-end ") }
                onClick={()=>{   
                    updateServer(dishId, flag);

                    setFlag(!flag);
                }}>
                    <div className='bg-white h-[27px] w-[27px] rounded-full ' ></div>
                </button>
            <span className='text-xs font-semibold text-purple-900'>false</span>

        </div>
    </div>

  )
}

export default DishCard