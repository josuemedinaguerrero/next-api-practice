const handler = (req, res) => {
   const params = req.query.params;
   res.json(params);
};

export default handler;
