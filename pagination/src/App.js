import React,{useState,useEffect} from 'react';
import Api from './Api';
import Posts from './Components/Posts';
import Pagination from './Components/Pagination';

const App=()=>{
    const [posts,setPosts]=useState([]);
    const [loading ,setLoading]=useState(false);
    const [currentPage,setCurrentPage]=useState(1);
  
    const [postsPerPage,setPostsPerPage]=useState(3);

    useEffect(()=>{
        const fetchPosts= async ()=>{
            setLoading(true);
            const result=await Api.get('report');
            setPosts(result.data[0].items);
            setLoading(false);
        }
        fetchPosts();
       
    },[]);
     const indexOfLastPage=currentPage * postsPerPage;
    const indexOfFirstPage=indexOfLastPage - postsPerPage;

    const currentPosts=posts.slice(indexOfFirstPage,indexOfLastPage);


    const paginate=pageNumber=>{

        setCurrentPage(pageNumber);
    }
   // console.log(posts)
    return <div className='ui container'>
        <div className='ui  text menu '>
            <a className='item'>Title</a>
            <a className='item'>Description</a>
            <a className='item'>PuBDate</a>
        </div>
      
       
      <Posts loading={loading}
      Posts={currentPosts}/>
      <Pagination totalPage={posts.length}
       
       activePage={currentPage }
       paginate={paginate}
       postsPerPage={postsPerPage}/>
       
    </div>
};

export default App;