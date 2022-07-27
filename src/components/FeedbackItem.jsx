
function FeedbackItem({item}) {


    // const handleClick = () => {
    //     setRating((prev) => {
    //         // This is how we can access the previous value of the state
    //         return prev + 1
    //     })
    // }


    return (
    <div className="card">
        <div className="num-display">{item.rating}</div>
        <div className="text-display">
            {item.text}
        </div>
        {/* <button onClick={handleClick}>Click</button> */}
    </div>
    )
}

export default FeedbackItem
