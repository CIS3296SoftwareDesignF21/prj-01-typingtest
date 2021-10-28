import "../stylesheets/TypingTest.css"

const TypingTest = (props) => {
    return (
        <div className="container">
            <div className="word-base">
                <div className="test-text"> 
					{props.words.split("").map(function(char, idx){
						return (
                            <span 
                                className={(idx < props.index) ? 'right' : 'default'}
                            >
                                {char}
                                </span>
                        )
					})}
                    </div>
				</div>
        </div>
    )
}

export default TypingTest;