import { HeartIcon } from '@heroicons/react/24/outline'

const VoteButton = (props) => {
    const {voted, handleVote, handleDeleteVote, voteCount, loggedIn} = props;
    return (
        <div>
            {loggedIn ?
            <div>
            <button onClick={!voted ?handleVote:handleDeleteVote} >
            {!voted ?
            <HeartIcon
            className="h-6 w-6 inline"
            /> : 
            <HeartIcon
            className="h-6 w-6 inline"
            fill="fill-solid" 
            />}
            </button>  {voteCount}</div> : 
            <div>
            <HeartIcon
            className="h-6 w-6 inline"
            /> {voteCount}</div> }
        </div> 
    )
}

export default VoteButton;