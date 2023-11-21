import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { HeartIcon } from '@heroicons/react/24/outline'
import moment from "moment";
import Avatar from "../components/Avatar";
import Loading from "../components/Loading";
import { GET_SINGLE_QUESTION } from "../utils/queries";

const Question = () => {
  const questionId = useParams("id");
  const { loading, data } = useQuery(GET_SINGLE_QUESTION, {
    variables: { questionId: questionId.id },
  });
  const question = data?.getSingleQuestion || [];

  if (loading) {
    return (
      <Loading/>
      )
  }

  return (
    <div className="flex items-center justify-center m-2">
      {console.log(data)}
      <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white">
        <div className="flex w-full items-center justify-between border-b pb-3">
          <div className="flex items-center space-x-3">
            <Avatar />
            <div className="text-lg font-bold text-slate-700">
              {question.userId.username}
            </div>
          </div>
          <div className="flex items-center space-x-8">
            {/* <button className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold">Category</button> space for TAGS */}
            <div className="text-xs text-neutral-500">
              {moment(question.createdAt).fromNow()}
            </div>
          </div>
        </div>

        <div className="mt-4 mb-6">
          {/* <div className="mb-3 text-xl font-bold">Nulla sed leo tempus, feugiat velit vel, rhoncus neque?</div>  title ??? */}
          <div className="text-sm text-neutral-600">{question.textContent}</div>
        </div>

        <div>
          <div className="flex items-center justify-between text-slate-500">
            <div className="flex space-x-4 md:space-x-8">
              <HeartIcon className="h-6 w-6" /> {question.questionVote}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
