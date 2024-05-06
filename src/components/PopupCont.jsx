import React from 'react'
import "../styles/PopupCont.css"
// import Mainsection from "./Mainsection.jsx"
const PopupCont = ({ hidePopup, question, setquestion}) => {
    const Addquestion = () =>{
        let value = document.getElementById('hello').value;
        console.log(value);
        const updatedquestion = {
            id: question.length,
            name: "Priyanka",
            content: value
        }
        setquestion([...question,updatedquestion]);
        hidePopup();
        // setquestion(...question,question);
        // setquestion(question);
    }
    return (
        <div>
            <div className='popup-container'>
                <span className="material-symbols-outlined cross" onClick={hidePopup} style={{ cursor: "pointer" }}>
                    close
                </span>

                <div className='popup-content'>

                    {/* Your question creation form goes here */}
                    <div className='sec-options'>
                        <span className="material-symbols-outlined">
                            account_circle
                        </span>
                        <span class="material-symbols-outlined">
                            arrow_right
                        </span>
                        <select name="security" id="">
                            <option value="Public">Public</option>
                            <option value="Private">Private</option>
                            <option value="Protected">Protected</option>
                        </select>
                    </div>
                    <textarea  id="hello" placeholder='Enter your question...' />
                    <div className='popup-buttons'>
                        <button onClick={hidePopup}>Cancel</button>
                        <button className='popup-close' onClick={Addquestion}>
                            Add
                        </button>
                    </div>
                    {/* <button onClick={handleAddQuestion}>Submit</button> */}
                </div>

            </div>
        </div>
    )
}

export default PopupCont