import { comments } from "../../../data/comments";

const handler = (req, res) => {
   const { commentId } = req.query;
   const comment = comments.find((comment) => comment.id === parseInt(commentId));

   if (req.method === "GET") {
      res.json(comment);
   } else if (req.method === "DELETE") {
      const index = comments.findIndex((comment) => comment.id === parseInt(commentId));
      comments.splice(index, 1);
      res.json(comment);
   }
};

export default handler;