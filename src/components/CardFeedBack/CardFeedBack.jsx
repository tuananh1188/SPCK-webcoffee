import React from 'react'

function CardFeedBack(props) {
    const dataFeedBack = props.data;
  return (
    <div className='card-fb text-center'>
        <div className="flex justify-center gap-20 mt-50 m-auto">
                {dataFeedBack.map((item) => (
                    <div key={item.id} className='w-1/5 py-5 bg-amber-100 flex flex-col items-center rounded-2xl relative'>
                        <img src={item.img} className='w-36 absolute -top-20'/>
                        <div>
                            <p className="text-[24px] font-bold mt-20">{item.name}</p>
                            <p className='text-[16px] w-50 mt-5'>{item.comment}</p>
                        </div>
                    </div>
                ))}
        </div>
    </div>
  )
}

export default CardFeedBack;