// App.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Mainsection from './Mainsection';
import Navbar from './Navbar';
import PopupCont from './PopupCont';

const Popup = () => {
  // const location = useLocation();
  // const { state, state2 } = location;
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [question, setquestion] = useState([]);
  // console.log(state);
  const showPopup = () => {
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setPopupVisible(false);
  };

  const handleAddQuestion = () => {
    // Add your logic to handle the creation of the question
    // For example, you can make an API call to save the question
    // and then hide the pop-up
    hidePopup();
  };


  return (
    <div>
      <Navbar showPopup={showPopup} handleAddQuestion={handleAddQuestion} />
      {isPopupVisible && (<PopupCont hidePopup={hidePopup}  setquestion={setquestion} question={question} />)}
      <Mainsection question={question} />
    </div>
  );
};

export default Popup;