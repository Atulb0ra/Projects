import { createContext, useState } from "react";
import run from "../config/univox";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [previousPrompts , setPreviousPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index, nextWord) => {
        setTimeout(function (){
            setResultData(prev => prev + nextWord)
        },75*index)
    }
    
    const newChat = () => {
        setLoading(false)
        setShowResult(false)
    }
    const onSent = async (prompt) => {

        setResultData("")
        setLoading(true)
        setShowResult(true)
        let response;
        //this is for previous prompt data
        if(prompt !== undefined){
            response = await run(prompt);
            setRecentPrompt(prompt)
        }
        // for new input data
        else{
            setPreviousPrompts(prev => [...prev, input])
            setRecentPrompt(input)
            response = await run(input)
        }
        // setPreviousPrompts(prev => [...prev, input])
        // setRecentPrompt(input)
        // const response = await run(input)
        let responseArray = response.split("**");
        let newResponse = "";
        for(let i = 0 ; i < responseArray.length; i++){
            if(i === 0 || i%2 !== 1){
                newResponse += responseArray[i]
            }
            else{
                newResponse += "<b>" + responseArray[i] + "</b>"
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>")
        let newResponseArray = newResponse2.split(" ");
        for(let i = 0; i<newResponseArray.length; i++){
            delayPara(i, newResponseArray[i]+ " ")
        }
        setLoading(false)
        setInput("")

    }
    
    const contextValue = {
        previousPrompts,
        setPreviousPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;