import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";
import { FaPlusCircle } from "react-icons/fa";

export default function Home() {
  const isModerator = useSelector(
    (state) => state.user.currentUser.isModerator,
  );
  return (
    <div className="p-5">
      {isModerator && (
        <div className="flex justify-end">
          <Link to={"/newlisting"} className="">
            <FaPlusCircle className="text-green-700" />
          </Link>
        </div>
      )}
    </div>
  );
}
