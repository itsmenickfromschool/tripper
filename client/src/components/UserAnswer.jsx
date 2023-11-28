import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Auth from "../utils/auth";
import { GET_SINGLE_QUESTION } from "../utils/queries";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import moment from 'moment';
import { useQuery, useMutation } from "@apollo/client";
// import { GET_QUESTIONS } from "../utils/queries";
import { SAVE_ANSWER } from "../utils/mutations";
// import pluralize from "pluralize";
// import Avatar from "../components/Avatar";
// import Loading from "../components/Loading";

function UserAnswer({ questionId, userId }) {
  const [showAlert, setShowAlert] = useState(false);
  const [saveAnswer, { error }] = useMutation(SAVE_ANSWER);
  return (
    <>
      {Auth.loggedIn() ? (
        <Formik
          initialValues={{ answer: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.answer) {
              errors.answer = "Required";
            }
            return errors;
          }}
          onSubmit={async (userFormData, { setSubmitting }) => {
            const user = Auth.getProfile();
            try {
              const { data } = await saveAnswer({
                variables: {
                  userId: userId,
                  questionId: questionId,
                  textContent: userFormData.answer,
                },
              });
            } catch (err) {
              console.error(err);
              setShowAlert(true);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 m-4">
              <div
                className={`${
                  !showAlert ? "hidden" : ""
                } block bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative`}
                role="alert"
              >
                <span className="block sm:inline">Answer Failed</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg
                    className="fill-current h-6 w-6 text-red-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </span>
              </div>
              <label
                htmlFor="answer"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Answer:
              </label>
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Answer"
                type="text"
                name="answer"
                as="textarea"
              />
              <ErrorMessage name="answer" component="div" />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      ) : (
        ""
      )}
    </>
  );
}

export default UserAnswer;