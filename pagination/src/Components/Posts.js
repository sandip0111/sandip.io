import React from 'react' ;

const Posts=({loading,Posts})=>{

    const renderList=Posts.map(post=>{
        return (
               <div key={post.title} className='row'>
                  
                  
                <div className='column'>
                   <h1> {post.title}</h1>
                </div>
                
                <div className='column'>
                  <p> {post.description}</p> 
                </div>
                <div className='column'>
                   {post.pubDate}
                </div>
                </div>
        );
    })
if(loading){
    return <div>loading..</div>

}


return (
    <div className='ui three column grid'>
        
        {renderList}
        </div>
);


}

export default Posts;
