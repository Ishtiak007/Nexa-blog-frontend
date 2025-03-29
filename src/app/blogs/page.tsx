import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types";

const BlogsPage = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  return (
    <div>
      <h1 className="text-3xl text-center my-5 font-bold">
        Expolore all <span className="text-teal-600">Blogs</span>
      </h1>
      <p className="text-center text-gray-400 w-2/5 mx-auto">
        <i>
          Explore the captivating realm of quantum computing, where
          groundbreaking computational power is unleashed like never before.
        </i>
      </p>
      <div>
        {blogs.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
