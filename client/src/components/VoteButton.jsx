import { HeartIcon } from '@heroicons/react/24/outline'

const VoteButton = (props) => {
    const {questionVoted, handleQuestionVote, handleDeleteQuestionVote, question, loggedIn} = props;
    return (
        <div>
            {loggedIn ?
            <div>
            <button onClick={!questionVoted ?handleQuestionVote:handleDeleteQuestionVote} >
            {!questionVoted ?
            <HeartIcon
            className="h-6 w-6 inline"
            /> : 
            <HeartIcon
            className="h-6 w-6 inline"
            fill="fill-solid" 
            />}
            </button>  {question.questionVote}</div> : 
            <div>
            <HeartIcon
            className="h-6 w-6 inline"
            /> {question.questionVote}</div> }
        </div> 
    )
}

export default VoteButton;