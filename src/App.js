import {useState} from 'react'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from './data/FeedbackData'
// import FeedbackItem from './components/FeedbackItem'
// Components can be either classes or functions

// With more modern react we find functoinal components, classes are old school
function App(){
    const [feedback, setFeedback] = useState(FeedbackData)
    return(
        <>
            <Header/>
            <div className="container">
                <FeedbackList feedback = {feedback}/>
                {/* We need to access the app level state from the feedback list */}
            </div>  
        </>
    )
    // JSX helps us to embed HTML directly into javascript
}

export default App