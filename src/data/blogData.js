import { designBlog } from "@/___BlogData/designBlog/index/index-design";
import { ebayBlog } from "@/___BlogData/ebayBlog/index/index-ebay";
import { ecommerceBlog } from "@/___BlogData/ecommerceBlog/index/index-ecommerce";
import { SeoBlog } from "@/___BlogData/seoBlog";
import { UiuxBlog } from "@/___BlogData/uiuxBlog/index-uiux";
import { LocalseoBlog } from "@/___BlogData/localseoBlog/index-localseo";
import { contentMarketingBlogPosts } from "@/___BlogData/contentMarketingBlog";
import { WebDevelopmentBlog } from '@/___BlogData/webDevelopmentBlog/index-webdev';
import { WebDesignBlog } from '@/___BlogData/webDesignBlog/index-webdesign';

// data/blogs.js
export const blogs = [
...designBlog,
...SeoBlog,
...ecommerceBlog,
...ebayBlog,
...UiuxBlog,
...LocalseoBlog,
...contentMarketingBlogPosts,
...WebDevelopmentBlog,
...WebDesignBlog
];
