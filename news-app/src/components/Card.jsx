import React from 'react'

function Card({data}) {
    console.log(data)

  return (
    <div className='cardContainer'>

        {

            !data ? "" :

            data.map((currItem , index) => {
                if(!currItem.urlToImage) {
                    return null;
                } else {
                    return (
                        <div className='card' key={index}> 
    
                            <img src={currItem.urlToImage} alt="image" />
    
                            <div className="content">
    
                                <a 
                                onClick={() => window.open(currItem.url)}
                                className='title'>{currItem.title}</a>
                                <p>{currItem.description}</p>
                                <button
                                onClick={() => window.open(currItem.url)}
                                >Read More</button>
    
                            </div>
    
                        </div>
                    )
                }
                
            })

        }
      
    </div>
  )
}

export default Card
