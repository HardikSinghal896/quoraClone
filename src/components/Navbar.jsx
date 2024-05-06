import React from 'react';
import '../styles/Navbar.css';
import Image from '../Images/Daco_2831899.png'; 

const Navbar = ({showPopup}) => {
  const iconStyle = {
    fill: 'red', // Set the desired color
  };
  const handleAddQuestion = () => {
    console.log("handleAddQuestion is called");
  }


  return (
    <div className='navmain-container'>
      <img src={Image} alt='' width={'100px'} />
      <span className='material-symbols-outlined' style={iconStyle}>
        home
      </span>
      
      <span className='material-symbols-outlined'>post_add</span>
      <span className='material-symbols-outlined'>edit_square</span>
      <span className='material-symbols-outlined'>groups</span>
      <span className='material-symbols-outlined'>notifications</span>
      <div className='search-container'>
        <span className='material-symbols-outlined search-icon'>search</span>
        <input type='text' placeholder='Search Quora' />
      </div>
      <button onClick={handleAddQuestion}>Try Quora +</button>
      <button onClick={showPopup}>Add Question</button>

     
    </div>
  );
};

export default Navbar;
