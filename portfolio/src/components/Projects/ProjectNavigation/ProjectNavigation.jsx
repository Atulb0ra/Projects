import React,{useState, useRef, useEffect} from 'react'
import "./ProjectNavigation.css"
function ProjectNavigation({
    tab,
    onChange,
}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const[offset, setOffset] = useState(0);
    const[indicatorWidth, setIndicatorWidth] = useState(0);
    const itemsEls = useRef(new Array());
    const sumArray = (arr) =>{
        let sum = 0;
        for(let i = 0; i<arr.length; i++){
            sum += arr[i];
        }
        return sum;
    }
    useEffect(() => {
        const prevEl = itemsEls.current.filter((_,index) => index<activeIndex);
        setOffset(
            sumArray(prevEl.map(item => item.offsetWidth))
        )
        setIndicatorWidth(itemsEls.current[activeIndex].offsetWidth)
    },[activeIndex])
  return (
    <nav className="project-navigation">
        {
            tab.map((tab, index) =>(
                <button
                ref = {(el) => itemsEls.current[index] = el }
                onClick ={()=>{
                    setActiveIndex(index);
                    onChange(tab);
                }}
                key = {index}
                >
                    {tab}
                </button>
            ))
        }
        <span className="indicator"
        style = {{
            left : `${offset}`,
            width : `${indicatorWidth}`,
        }}
        />
    </nav>
  )
}

export default ProjectNavigation
