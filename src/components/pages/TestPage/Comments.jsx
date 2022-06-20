import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getComments } from "../../../feateures/commentsSlice";

const Comments = () => {
  const comments = useSelector((state) => state.comments.comments);
  console.log(comments)

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getComments())
  })
  
  return (
    <>
      {comments.map((item) => {
        return (
          <>
            <input></input>
            <div>{item.text}</div>
          </>
        );
      })}
    </>
  );
};

export default Comments;
