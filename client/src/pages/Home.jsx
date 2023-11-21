import { useState } from "react";
import moment from "moment";
// const moment = require("moment");
import { useQuery } from "@apollo/client";
import { GET_QUESTIONS } from "../utils/queries";
import pluralize from "pluralize";
import Avatar from "../components/Avatar";

const Home = () => {
  const { loading, data } = useQuery(GET_QUESTIONS);
  const questions = data?.getQuestion || [];

  return (
    <>
      {" "}
      {questions.map((item) => {
        return (
          <div key={item._id} className="flex items-center justify-center m-2 ">
            <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white">
              <div className="flex w-full items-center justify-between border-b pb-3">
                <div className="flex items-center space-x-3">
                  <Avatar />
                  <div className="text-lg font-bold text-slate-700">
                    {item.userId.username}
                  </div>
                </div>
                <div className="flex items-center space-x-8">
                  {/* <button className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold">Category</button> This is for tags if we add them */}
                  <div className="text-xs text-neutral-500">
                    {moment(item.createdAt).fromNow()}
                  </div>
                </div>
              </div>

              <div className="mt-4 mb-6">
                {/* <div className="mb-3 text-xl font-bold">
                  Nulla sed leo tempus, feugiat velit vel, rhoncus neque?
                </div> */}
                <div className="text-sm text-neutral-600">
                  {item.textContent}
                </div>
              </div>

              <div>
                <div className="flex justify-start text-slate-500">
                  <div className="flex space-x-4 md:space-x-8">
                    {pluralize("Answer", item.answer.length, true)}
                    <br /> 
                    {pluralize("Vote", item.questionVote, true)} 
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Home;
