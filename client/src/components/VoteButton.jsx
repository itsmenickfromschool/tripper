import { HeartIcon } from '@heroicons/react/24/outline'

const VoteButton = (props) => {
    const {questionVoted, handleQuestionVote, handleDeleteQuestionVote, question} = props;
    return (
        <div>
            <button onClick={!questionVoted ?handleQuestionVote:handleDeleteQuestionVote} >
            {!questionVoted ?
            <HeartIcon
            className="h-6 w-6"
            /> : 
            <HeartIcon
            className="h-6 w-6"
            fill="fill-solid"
            />}
            </button> {question.questionVote}
        </div> 
    )
}

export default VoteButton;