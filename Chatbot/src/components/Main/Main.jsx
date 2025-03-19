import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import {Context} from '../../context/Context'
import { useContext } from 'react'

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)
    return (
        <div className='main'>
            <div className="nav">
                <p>UniVox</p>
                <img className='icon' src={assets.profile_user} alt="" />
            </div>
            <div className="main-container">
                {!showResult
                    ? <>
                        <div className="greet">
                            <p><span>Hello, Dev.</span></p>
                            <p> How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautiful places to see an upcoming road trip</p>
                                <img className='icon' src={assets.compass} alt="" />
                            </div>
                            <div className="card">
                                <p>What's the latest tech trend?</p>
                                <img className='icon' src={assets.light_bulb} alt="" />
                            </div>
                            <div className="card">
                                <p>Ask me anything, and I'll find the best answer!</p>
                                <img className='icon' src={assets.message} alt="" />
                            </div>
                            <div className="card">
                                <p>How to improve my coding skill?</p>
                                <img className='icon' src={assets.code} alt="" />
                            </div>
                        </div>
                    </>
                    :
                    <div className="result">
                        <div className="result-title">
                            <img src={assets.profile_user} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.sparkler} alt="" />
                            {loading
                                ? <div className=" loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div> :
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }
                        </div>
                    </div>
                }

                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Ask anything..." />
                        <div>
                            <img src={assets.gallery} alt="" />
                            <img src={assets.mic} alt="" />
                            {input ? <img onClick={() => onSent()} src={assets.send} alt="" /> : null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        UniVox may display inacurate info, including about people, so double check its responses. Your privacy and UniVox Apps
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main
