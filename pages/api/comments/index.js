import { comments } from "../../../data/comments";

const handler = (req, res) => {
   if (req.method === "GET") {
      res.json(comments);
   } else if (req.method === "POST") {
      const comment = req.body.comment;
      const newComment = {
         id: new Date().getTime(),
         text: comment,
      };
      comments.push(newComment);
      res.json(newComment);
   }
};

export default handler;
