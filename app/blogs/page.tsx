import PageHeader from "@/components/ui/PageHeader";
import BlogsClient from "@/components/blogs/BlogsClient";
import { blogPosts } from "@/data/blogs";

export default function BlogsPage() {
  return (
    <main>
      <PageHeader
        title="Blogs & Writings"
        subtitle="Thoughts on tech, career, and everything in between"
      />
      <BlogsClient posts={blogPosts} />
    </main>
  );
}
