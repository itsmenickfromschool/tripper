import { useMutation } from "@apollo/client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Upload from "./Upload";
import { SAVE_USER_INFO } from "../utils/mutations";
import Avatar from "./Avatar";

export default function ProfileForm(props) {
  const { username, bio, user, setShowForm } = props;
  const [saveUserInfo, { error, data }] = useMutation(SAVE_USER_INFO);
  return (
    <>
      <Formik
        initialValues={{ username: username, bio: bio, email: user.data.email }}
        validate={(values) => {
          const errors = {};
          if (!values.bio) {
            errors.bio = "Required";
          } else if (!values.email) {
            errors.bio = "Required";
          } else if (!values.username) {
            errors.username = "Required";
          }
          return errors;
        }}
        onSubmit={async (userFormData, { setSubmitting }) => {          
          try {
            const { data } = await saveUserInfo({
              variables: {
                userId: user.data._id,
                bio: userFormData.bio,
                email: userFormData.email,
                username:userFormData.username
              },
            })
            setShowForm(false);
            window.location = '/profile/'+userFormData.username;
          } catch (err) {
            console.error(err);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="rounded-xl border p-5 shadow-md w-9/12 bg-white">
            <div className="space-y-12 flex items-center m-4 mx-auto"></div>
            <div className="border-b border-gray-900/10 pb-12 m-4">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Profile
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 m-4">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
                <div className="mt-2">
                  <Field
                    name="username"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <ErrorMessage name="username" component="div" />
                </div>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 m-4">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <Field
                    name="email"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <ErrorMessage name="email" component="div" />
                </div>
              </div>
            </div>

            <div className="col-span-full m-4">
              <label
                htmlFor="bio"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Bio
              </label>
              <div className="mt-2">
                <Field
                  name="bio"
                  as="textarea"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <ErrorMessage name="bio" component="div" />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Write a few sentences about yourself.
              </p>
            </div>

            <div className="col-span-full m-4">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <Avatar
                  className="h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <Upload userId={user.data._id} />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6 m-4">
              <button
                onClick={() => setShowForm(false)}
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
