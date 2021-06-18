import React from 'react'
import './Searchbar.css'
 
 
export default function Searchbar() {
  return (
    
    // <div className="search">
    //     {/* <i className="fa-search"></i> */}
    //     <input classname="ip" type="text" placeholder="Search by Hospital/Care Centre Name"></input>
    //     <svg className="search_icon" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"/></svg>
    // </div>
      // <div className="main2">
      // <div className="search-box">
        
      // <input 
      // classname="ip"
      // type="search" 
      // autocomplete="off"
      // placeholder="Search by Hospital/Care Centre Name"/>  
      // <svg className="search_icon" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"/></svg>
      
      // </div>
      // </div>
      <div class="wrap">
   <div class="search">
      <input type="text" class="searchTerm" placeholder="Search by Hospital/Care Centre Name"></input>
      <button type="submit" class="searchButton">
      <svg className="search_icon" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"/></svg> 
     </button>
   </div>
</div>
  )
}
