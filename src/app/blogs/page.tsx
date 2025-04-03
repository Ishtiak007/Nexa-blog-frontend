"use client";
import BlogCard from "@/components/ui/BlogCard";
import Spinner from "@/components/ui/Spinner";
import { useGetBlogsQuery } from "@/redux/apis/blogs.slice";
import { Blog } from "@/types";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Nexa Blog | Blogs",
// };

const BlogsPage = () => {
  // const res = await fetch("http://localhost:5000/blogs", {
  //   cache: "no-store",
  // });
  // const blogs = await res.json();
  const { data: blogs, isLoading } = useGetBlogsQuery({});
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-3xl text-center my-5 font-bold">
        Expolore all <span className="text-teal-600">Blogs</span>
      </h1>
      <p className="text-center text-gray-400 w-2/5 mx-auto">
        <i>
          Explore the captivating realm of quantum computing, where
          groundbreaking computational power is unleashed like never before.
        </i>
      </p>
      <div className="grid grid-cols-3 gap-6 my-5">
        {blogs.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
