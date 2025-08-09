import React from 'react'

const Button = ({text,Icon,Document,style,type}) => {
  return (
    <div>
      <a href={Document}><button type={type} style={style} className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold active:scale-95 duration-200 flex gap-3 items-center justify-center'>{Icon}{text}</button></a>
    </div>
  )
}

export default Button