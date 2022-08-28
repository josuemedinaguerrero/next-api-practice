const CommentId = ({ comment }) => {
   return (
      <div>
         {comment.id} | {comment.text}
      </div>
   );
};

export const getStaticPaths = () => {
   return {
      paths: [{ params: { commentId: "1" } }, { params: { commentId: "2" } }, { params: { commentId: "3" } }],
      fallback: false,
   };
};

export const getStaticProps = async (context) => {
   const { commentId } = context.params;

   const res = await fetch(`http://localhost:3000/api/comments/${commentId}`);
   const data = await res.json();

   return {
      props: {
         comment: data,
      },
   };
};

export default CommentId;
