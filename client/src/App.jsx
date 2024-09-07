import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get("http://localhost:3000");
        setQuote(response.data.quote);
        if (response.data.author==="") {
          setAuthor("Some smart guy");
        }else{
          setAuthor(response.data.author);
        }
      } catch (error) {
        console.error("Error fetching the quote:", error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="cursor-help p-9 mx-auto h-screen w-full bg-gradient-to-r from-purple-400 via-blue-200 to-green-500">
      <div>
        <p className=" drop-shadow-xl text-transform: uppercase pb-12 flex justify-center">
          <b className="bg-zinc-300 p-3 rounded-md ">{author}</b>
        </p>
      </div>
      <div className=" drop-shadow-xl flex justify-center py-20 mx-auto rounded-xl h-96 w-full bg-white p-4 items-center">
        <h1 className="italic text-4xl flex justify-center text-center w-1/2">
          <q>
           {quote}
          </q>
        </h1>
      </div>
      <footer className="italic opacity-40 align-text-bottom ">{new Date().getFullYear()}@ by gyaneswar</footer>
    </div>
  );
}

export default App;

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then(response => {
//         setPosts(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <ul>
//       {posts.map(post => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   );
// }

// export default App;
