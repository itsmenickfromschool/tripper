import { useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { HeartIcon } from '@heroicons/react/24/outline'
import moment from "moment";
import Avatar from "../components/Avatar";
import Loading from "../components/Loading";
import VoteButton from "../components/VoteButton";
import { GET_SINGLE_QUESTION, 
  GET_SINGLE_QUESTION_VOTE } from "../utils/queries";
import { SAVE_QUESTION_VOTE, 
  DELETE_QUESTION_VOTE } from "../utils/mutations";
import Auth from "../utils/auth";

const Question = () => {
  const [questionVoted, setQuestionVoted] = useState();
  const questionId = useParams("id");
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  let user = {};
  if (token) {
    user = Auth.getProfile();
    };

  const singleQuestionVote = useQuery(GET_SINGLE_QUESTION_VOTE, {
    variables:{userId:user?.data._id || '1',questionId: questionId.id  }})
    console.log(singleQuestionVote);
    useEffect(() => {
      if (singleQuestionVote.data) {
        setQuestionVoted(singleQuestionVote.data.getSingleQuestionVote.votes.length !== 0);
      }
    }, [singleQuestionVote.data]); 
  
  

  const { loading, data } = useQuery(GET_SINGLE_QUESTION, {
    variables: { questionId: questionId.id },
  });
  const question = data?.getSingleQuestion || [];
  const [questionVote] = useMutation(SAVE_QUESTION_VOTE, {
    refetchQueries: [
      {
        query: GET_SINGLE_QUESTION,
        variables: { questionId: questionId.id },        
      }
    ]
  });
  const [deleteQuestionVote ] = useMutation(DELETE_QUESTION_VOTE, {
    refetchQueries: [
      {
        query: GET_SINGLE_QUESTION,
        variables: { questionId: questionId.id },        
      }
    ]
  });
  if (loading) {
    return (
      <Loading/>
      )
  }
  const  handleQuestionVote = async (e) => {
    const user = Auth.getProfile();
    
    try {
      const { data } = await questionVote({ variables:{userId:user.data._id, questionId: questionId.id}},
      );
      setQuestionVoted(true);
    } catch (err) {
      console.error(err);
    }
  }

  const  handleDeleteQuestionVote = async (e) => {
    const user = Auth.getProfile();
    
    try {
      const { data } = await deleteQuestionVote({ variables:{userId:user.data._id, questionId: questionId.id}},
      );
      setQuestionVoted(false);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="flex items-center justify-center m-2">
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
              {singleQuestionVote.data !== undefined && (

                <VoteButton questionVoted={questionVoted}
                handleQuestionVote={handleQuestionVote}
                handleDeleteQuestionVote={handleDeleteQuestionVote}
                question={question}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
