import { useEffect, useState, ReactNode } from 'react';
import { get } from './util/http.ts';
import BlogPosts, { BlogPost } from './components/BlogPosts.tsx';
import fetchingImg from './assets/data-fetching.png';
import ErrorMessage from './components/ErrorMessage.tsx';

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
}

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string>();


  // Every function that you add async to returns a promise
  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);

      try {
        const data = (await get('https://jsonplaceholder.typicode.com/posts'
        )) as RawDataBlogPost[];
        const blogPosts = data.map(rawPost => {
          return {
            id: rawPost.id,
            title: rawPost.title,
            text: rawPost.body
          }
        });
      } catch(error) {
          if (error instanceof Error) {
            setError(error.message);
          }
      }

      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  let content: ReactNode;

  if(error) {
    content = <ErrorMessage text={error} />
  }

  if(fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts}/>;
  }

  if(isFetching) {
    content = <p id="loading-fallback">Fetching posts...</p>;
  }

  return (
    <main>
      <img src={fetchingImg} alt="An abstract image depicting a data fetching process." />
      {content}
    </main>
  );
}

export default App;
