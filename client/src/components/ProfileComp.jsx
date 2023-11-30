import Avatar from "./Avatar";
import { Link } from "react-router-dom";

export default function ProfileComp(props) {
  const { username, bio, user, setShowForm } = props;
  let loggedInUsername = user.data?.username || "";
  return (
    <div>
      { loggedInUsername === username ? (
        <div className="flex justify-end me-3">
          <button
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => setShowForm(true)}
          >
            Edit
          </button>
        </div>
      ) : (
        ""
      )}
      <div className="space-y-12 flex items-center m-4 mx-auto"></div>
      <div className="border-b border-gray-900/10 pb-12 m-4">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Profile
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          This information will be displayed publicly so be careful what you
          share.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 m-4">
        <div className="sm:col-span-4">
          <div className="block text-sm font-medium leading-6 text-gray-900">
            Username
          </div>
          <div className="mt-2">{username}</div>
        </div>
      </div>

      <div className="col-span-full m-4">
        <div className="block text-sm font-medium leading-6 text-gray-900">
          Bio
        </div>
        <div className="mt-2"></div>
        <p className="mt-3 text-sm leading-6 text-gray-600">{bio}</p>
      </div>

      <div className="col-span-full m-4">
        <div className="block text-sm font-medium leading-6 text-gray-900">
          Photo
        </div>
        <div className="mt-2 flex items-center gap-x-3">
          <Avatar className="h-12 w-12 text-gray-300" aria-hidden="true" />
        </div>
      </div>
      <div>
        <Link to="/checkout">Upgrade to Pro</Link>
      </div>
    </div>
  );
}
