"use client";

import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/lib/blog";

export default function BlogIndex() {
    const featuredPost = BLOG_POSTS[0];
    const remainingPosts = BLOG_POSTS.slice(1);

    return (
        <div style={{ background: "#FAFAFA", minHeight: "100vh", paddingTop: "120px", paddingBottom: "6rem" }}>
            <div style={{ maxWidth: "1040px", margin: "0 auto", padding: "0 2rem" }}>

                {/* Header */}
                <div style={{ borderBottom: "1px solid rgba(0,0,0,0.1)", paddingBottom: "2rem", marginBottom: "3rem" }}>
                    <h1 style={{
                        fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
                        fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                        fontWeight: 700,
                        color: "#005c97",
                        lineHeight: 1.1,
                    }}>
                        Pan Infra <span style={{ color: "#ee2e22" }}>Insights</span>
                    </h1>
                    <p style={{ marginTop: "0.75rem", fontSize: "1rem", color: "#666666", maxWidth: "500px", lineHeight: 1.6 }}>
                        Expert perspectives, market trends, and investment strategies in the Hyderabad real estate ecosystem.
                    </p>
                </div>

                {/* Featured Post */}
                {featuredPost && (
                    <div style={{ marginBottom: "5rem" }}>
                        <Link href={`/blog/${featuredPost.slug}`} style={{ display: "block", textDecoration: "none" }}>
                            <div style={{ position: "relative", width: "100%", height: "clamp(260px, 40vw, 500px)", borderRadius: "2px", overflow: "hidden", marginBottom: "2rem" }}>
                                <Image
                                    src={featuredPost.coverImage}
                                    alt={featuredPost.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    priority
                                />
                            </div>
                            <div style={{ maxWidth: "800px" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                                    <span style={{ fontSize: "0.65rem", fontWeight: 700,  letterSpacing: "0.15em", color: "#ee2e22" }}>
                                        {featuredPost.category}
                                    </span>
                                    <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#ccc", display: "inline-block" }} />
                                    <span style={{ fontSize: "0.875rem", color: "#777" }}>{featuredPost.readTime}</span>
                                </div>
                                <h2 style={{
                                    fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
                                    fontSize: "clamp(1.75rem, 4vw, 3rem)",
                                    fontWeight: 700,
                                    color: "#005c97",
                                    lineHeight: 1.15,
                                    marginBottom: "1rem",
                                }}>
                                    {featuredPost.title}
                                </h2>
                                <p style={{ fontSize: "1.05rem", color: "#555555", lineHeight: 1.7, marginBottom: "1.5rem", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                                    {featuredPost.excerpt}
                                </p>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                    <Image
                                        src={featuredPost.author.avatar}
                                        alt={featuredPost.author.name}
                                        width={40}
                                        height={40}
                                        style={{ borderRadius: "50%", objectFit: "cover" }}
                                    />
                                    <div>
                                        <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "#005c97" }}>{featuredPost.author.name}</p>
                                        <p style={{ fontSize: "0.75rem", color: "#888" }}>{featuredPost.date}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                )}

                <hr style={{ border: "none", borderTop: "1px solid rgba(0,0,0,0.06)", marginBottom: "4rem" }} />

                {/* Remaining Posts */}
                <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
                    {remainingPosts.map((post) => (
                        <div key={post.slug} style={{ display: "flex", gap: "2.5rem", alignItems: "flex-start", flexWrap: "wrap" }}>
                            {/* Text */}
                            <div style={{ flex: 1, minWidth: "260px" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                                    <Image
                                        src={post.author.avatar}
                                        alt={post.author.name}
                                        width={24}
                                        height={24}
                                        style={{ borderRadius: "50%", objectFit: "cover" }}
                                    />
                                    <span style={{ fontSize: "0.75rem", fontWeight: 500, color: "#333" }}>{post.author.name}</span>
                                </div>
                                <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                                    <h3 style={{
                                        fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
                                        fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
                                        fontWeight: 700,
                                        color: "#005c97",
                                        lineHeight: 1.25,
                                        marginBottom: "0.75rem",
                                    }}>
                                        {post.title}
                                    </h3>
                                    <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: 1.65, marginBottom: "1rem", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                                        {post.excerpt}
                                    </p>
                                </Link>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                    <span style={{ fontSize: "0.65rem", fontWeight: 700,  letterSpacing: "0.15em", color: "#ee2e22" }}>{post.category}</span>
                                    <span style={{ fontSize: "0.75rem", color: "#888" }}>{post.readTime}</span>
                                    <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#ccc", display: "inline-block" }} />
                                    <span style={{ fontSize: "0.75rem", color: "#888" }}>{post.date}</span>
                                </div>
                            </div>
                            {/* Thumbnail */}
                            <Link href={`/blog/${post.slug}`} style={{ flexShrink: 0, width: "clamp(200px, 28vw, 300px)", height: "200px", borderRadius: "2px", overflow: "hidden", display: "block" }}>
                                <Image
                                    src={post.coverImage}
                                    alt={post.title}
                                    width={400}
                                    height={300}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
