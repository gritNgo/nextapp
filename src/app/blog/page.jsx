import styles from "./blog.module.css";
import PostCard from "@/components/postCard/postCard";
import { getPosts } from "@/lib/data";

export const metadata = {
  title: 'Blog Page',
  description: 'Blog Posts Page',
}

// FETCHING USING API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog");

  if (!res.ok) {
    throw Error("Something went wrong");
  }

  return res.json();
};

const BlogPage = async () => {
  
  // FETCHING USING API
  const posts = await getData();

  // FETCHING WITHOUT AN API WITH LOCAL DATA FILE
  // const posts = await getPosts();

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
