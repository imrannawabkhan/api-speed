// pages/api/helloworld.js
export default (req, res) => {
    res.status(200).json({ message: 'Hello World! From Next Js' });
  };