"use server";
import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";

export const addPost = async (formData) => {

  // const title = formData.get("title")
  // const desc = formData.get("desc")
  // const slug = formData.get("slug")
  // destructured below

  const { title, desc, slug, userId } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log("Saved to db");

    // after successful add post operation, update page
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const deletePost = async (formData) => {
    const { id } = Object.fromEntries(formData);
    try {
      connectToDb();
  
      await Post.findByIdAndDelete(id);
      console.log("Deleted from db");
      revalidatePath("/blog");
    } catch (error) {
      console.log(error);
      return { error: "Something went wrong" };
    }
  };

  export const handleGithubLogin = async () => {
    "use server";
    await signIn("github");
  };

  export const handleLogout = async () => {
    "use server";
    await signOut();
  };

  