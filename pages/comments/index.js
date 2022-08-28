import { useState } from "react";

const Comments = () => {
   const [comments, setComments] = useState([]);
   const [comment, setComment] = useState("");

   const fetchComments = async () => {
      const res = await fetch("api/comments");
      const data = await res.json();
      setComments(data);
   };

   const submitComment = async () => {
      const res = await fetch("/api/comments", {
         method: "POST",
         body: JSON.stringify({ comment }),
         headers: {
            "Content-Type": "application/json",
         },
      });
      const data = await res.json();
      console.log(data);
   };

   const deleteComment = async (commentId) => {
      const res = await fetch(`http://localhost:3000/api/comments/${commentId}`, { method: "DELETE" });
      const data = await res.json();
      console.log(data);
      setComments((prev) => prev.filter((item) => item.id !== data.id));
   };

   return (
      <>
         <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
         <button onClick={submitComment}>Submit comment</button>
         <button onClick={fetchComments}>Load Comments</button>
         {comments.map((comment) => (
            <div key={comment.id}>
               {comment.id} - {comment.text}
               <button onClick={() => deleteComment(comment.id)}>Delete</button>
            </div>
         ))}
      </>
   );
};

export default Comments;
