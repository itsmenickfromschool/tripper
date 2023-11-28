import moment from "moment";
import Avatar from "../components/Avatar";
import Loading from "../components/Loading";
import VoteButton from "../components/VoteButton";

export default function Answer(props) {
    const { answer } = props;
    console.log(answer);
    return (
        <div className="rounded-xl border p-5 shadow-md w-9/12 bg-red">
        <div className="flex w-full items-center justify-between border-b pb-3">
          <div className="flex items-center space-x-3">
            <Avatar />
            <div className="text-lg font-bold text-slate-700">
              {answer.answerUserId.username}
            </div>
          </div>
          <div className="flex items-center space-x-8">
            {/* <button className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold">Category</button> space for TAGS */}
            <div className="text-xs text-neutral-500">
              {moment(answer.createdAt).fromNow()}
            </div>
          </div>
        </div>

        <div className="mt-4 mb-6">
          {/* <div className="mb-3 text-xl font-bold">Nulla sed leo tempus, feugiat velit vel, rhoncus neque?</div>  title ??? */}
          <div className="text-sm text-neutral-600">{answer.textContent}</div>
        </div>

        <div>
          <div className="flex items-center justify-between text-slate-500">
            <div className="flex space-x-4 md:space-x-8">
              {/* {singleQuestionVote.data !== undefined && (

                <VoteButton questionVoted={questionVoted}
                handleQuestionVote={handleQuestionVote}
                handleDeleteQuestionVote={handleDeleteQuestionVote}
                question={question}
                loggedIn={loggedIn}
                />
              )} */}
            </div>
          </div>
        </div>
      </div>
    )
}