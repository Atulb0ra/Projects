import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Sidebar = () => {
    const [extended, setExtended] = useState(false);
    const { onSent, newChat, previousPrompts, setRecentPrompt } = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }
    return (
        <div className="sidebar">
            <div className="top">
                <img onClick={() => setExtended(prev => !prev)} className='menu icon' src={assets.menu} alt="" />
                <div onClick = {() => newChat()} className="new-chat">
                    <img className='plus icon' src={assets.plus} alt="" />
                    {extended ? <p> new Chat</p> : null}
                </div>
                {extended
                    ? <div className="recent">
                        <p className="recent-title">
                            Recent
                        </p>
                        {previousPrompts.map((item, index) => {
                            return (
                                <div  onClick = {() => loadPrompt(item)} className="recent-entry">
                                    <img className='message icon' src={assets.message} alt="" />
                                    <p >{item.slice(0,18)}...</p>
                                </div>
                            )
                        })}
                    </div>
                    : null
                }

            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img className='help icon' src={assets.help} alt="" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img className='history icon' src={assets.history} alt="" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img className='setting icon' src={assets.cogwheel} alt="" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
    
}

export default Sidebar
