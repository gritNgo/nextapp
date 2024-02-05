import styles from "./blog.module.css";
import PostCard from "@/components/postCard/postCard";
import { getPosts } from "@/lib/data";

export const metadata = {
  title: 'Blog Page',
  description: 'Blog Posts Page',
}

// FETCHING USING API
const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/?_limit=9");

  if (!res.ok) {
    throw Error("Something went wrong");
  }

  return res.json();
};

const BlogPage = async () => {
  
  // FETCHING USING API
  const posts = await getData();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
