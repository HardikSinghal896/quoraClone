import React from 'react'
import image1 from "../Images/main-qimg-8aab36839f89de2ffed23a91bdc2f20e.webp"
import { useEffect } from 'react'
import axios from 'axios'
import "../styles/Mainsection.css"
import { useState } from 'react'
const Mainsection = ({ question }) => {
    const [data, setData] = useState([]);
    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await axios.get("http://localhost:9090/api/v1/employees");
    //         console.log(response.data)
    //         setData(response.data);
    //         console.log(data);
    //     }
    //     fetchData();
    // }, [])
    return (
        <div className='mainsec-container'>
            <div className="left-container">
                <p>+ Create space</p>
                <p>Education</p>
                <p>Microsoft Windows</p>
                <p>Meme Factory</p>
                <p>Photo Sharing</p>
                <p>Data Science and analytics</p>
                <p>Creativity</p>
                <hr />
                <div className="left-footer">
                    About Careers Terms Privacy <br /> Acceptable
                    UseBusinesses PressYour Ad ChoicesGrievance Officer
                </div>
            </div>
            <div className="mid-container">
                <div className="header">
                    <div className="profile-addpost">
                        <span className="material-symbols-outlined">
                            account_circle
                        </span>
                        <input type="text" placeholder='Add a post' />
                    </div>
                    <div className="threebuttons">
                        <button>Post</button>
                        <button>Answer</button>
                        <button>Ask</button>
                    </div>
                </div>
                {
                    question.map((question) => {
                        return <div className="post1">
                            <div className="profile-name">
                                <span className="material-symbols-outlined">
                                    account_circle
                                </span>
                                <div className="name-para">
                                    <h3>{question.content}</h3>
                                    <p>`Answer by {question.name}`</p>
                                </div>
                            </div>
                            <img src={image1} alt="" />
                            <div className="footer-postsection">
                                <div className="threebuttons">
                                    <span class="material-symbols-outlined">
                                        shift
                                    </span>
                                    <button>Upvote</button>
                                    <span class="material-symbols-outlined">
                                        arrow_downward_alt
                                    </span>
                                    <button>Downvote</button>

                                    <button>Comment</button>
                                </div>
                                <span class="material-symbols-outlined">
                                    more_horiz
                                </span>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className="right-container">
                <div className="insider-rightcontainer">
                    <h5>Space to follow</h5>
                    <hr />
                    {/* <p>asdfasdf asdf asdf asdf</p> */}
                    <div className="right-items1">
                        <h4>The anonymously writer</h4>
                        <p>If you want to experience  something then please follow do you want to add more content so that it goes to the next line </p>
                    </div>
                    <hr />
                    <div className="right-items2">
                        <h4>Hindustan Newspaper</h4>
                        <p>Click here to read the latest news of the india</p>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default Mainsection