import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import moment from "moment";
import Avatar from "../components/Avatar";
import { GET_SINGLE_QUESTION } from "../utils/queries";

const Question = () => {
  const questionId = useParams("id");
  const { loading, data } = useQuery(GET_SINGLE_QUESTION, {
    variables: { questionId: questionId.id },
  });
  const question = data?.getSingleQuestion || [];

  return (
    <div className="flex items-center justify-center m-2">
      <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white">
        <div className="flex w-full items-center justify-between border-b pb-3">
          <div className="flex items-center space-x-3">
            <Avatar />
            {console.log(question)}
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
              <svg
                transform="scale(0.5)"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
