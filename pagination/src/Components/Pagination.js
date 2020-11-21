import React,{useState} from 'react';


const Pagination=({totalPage,postsPerPage,paginate,activePage})=>{
     console.log(activePage)
    const pageNumber= [];

    for(let i=1; i<=Math.ceil(totalPage/postsPerPage);i++){
        pageNumber.push(i);

    }
    

    const pagination=pageNumber.map(number=>{

       // const active= number === activePage ? 'active' : '';
        return (
           
               
            <a onClick={()=>paginate(number)} href='!'
                className='item' >
                {number}
            </a>
            

        );
    })
    return (
        
        <div className='ui pagination menu'>
            
          {pagination}
          
        </div>
        
    );
}

export default Pagination;