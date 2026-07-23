import { useContext, useEffect, useRef} from "react"
import { UserContext } from "../context/useContext"
import titles from "../utils/cascading"


export default function CascadingDropDown() {
    const { state , dispatch } = useContext(UserContext)
    const statics = useRef();

    useEffect(() => {
                dispatch({type:"checkRoute" , payload:false})
    }, []);

    function subjectSelection(target) {
        dispatch({ type:"subjectSelection" , payload:target })
        statics.current.value = 'please select subject first';
    }

    function topicSelection(target) {
        dispatch({ type:"topicsSelection" , payload:target })
    }

    return (
        <div className="flex flex-col gap-3 pl-4 pt-4">
            <div className="flex gap-2">
                <p>Subjects</p>
                <select onChange={(e) => subjectSelection(e.target.value) } className="samebg cursor-pointer">
                    <option value="none">select subject</option>
                    <option value="frontend">Fronte-end</option>
                    <option value="backend">Backend-end</option>
                </select>
            </div>
            <div className="flex gap-2">
                <p>Topics</p>
                <select ref={statics} onChange={(e) => topicSelection(e.target.value)} className="samebg cursor-pointer">
                    <option value="">please select subject first</option>
                    { titles[state.subject] ? titles[state.subject].map(
                        tech => <option key={tech.id} value={tech.title.toLowerCase()}>{tech.title}</option>
                    ): ""}
                </select>
            </div>
            <div className="flex gap-2">
                <p>Chapters</p>
                <select className="samebg cursor-pointer">
                    <option value="">please select topics first</option>
                    { titles[state.subject] ? titles[state.subject].find( term => term.title.toLowerCase() == state.topics )?.terms.map( (term , index) => <option key={index} value={term.toLowerCase()}>{term}</option> ) : ""}
                </select>
            </div>
            <button className="w-25 text-white font-extrabold py-1 rounded-sm cursor-pointer bg-red-500">Submit</button>
        </div>
    )
}