import React from 'react'

function TextCurved({text,width,height,fontSize}) {
  return (
    
        <div className='text-curved flex justify-center items-center p-12.5 '>
                <svg
                    viewBox={`0 0 ${width} ${height}`}
                    width='100%'
                    height='auto'
                    style={{ maxWidth: '600px' }}
                >
                    <defs>
                        <path
                            id='curvePath'
                            d='M 80,199 Q 250,80 420,200'
                            fill='transparent'
                        />
                    </defs>

                    <text
                        fill='black'
                        style={{
                            fontSize: `${fontSize}px`,
                            fontWeight: 'bold',
                            fontFamily: 'Arial, sans-serif',
                            letterSpacing: '2px'
                        }}
                    >
                        <textPath
                            href='#curvePath'
                            startOffset='50%'
                            textAnchor='middle'
                        >
                            {text}
                        </textPath>
                    </text>
                </svg>
            </div>

  )
}

export default TextCurved