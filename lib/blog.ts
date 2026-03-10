export type BlogPost = {
    slug: string;
    title: string;
    excerpt: string;
    content: string; // HTML or Markdown string for the post content
    coverImage: string;
    author: {
        name: string;
        avatar: string;
        role: string;
    };
    date: string;
    readTime: string;
    category: string;
};

export const BLOG_POSTS: Omit<BlogPost, 'content'>[] = [
    {
        slug: "top-5-upcoming-areas-for-investment-in-hyderabad",
        title: "Top 5 Upcoming Areas for Real Estate Investment in Hyderabad (2026)",
        excerpt: "Discover the most promising micro-markets in Hyderabad that are projected to yield the highest ROI in the next five years, driven by infrastructure growth and IT expansion.",
        coverImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200",
        author: {
            name: "Ramesh Gupta",
            avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
            role: "Managing Director"
        },
        date: "Mar 05, 2026",
        readTime: "6 min read",
        category: "Investment"
    },
    {
        slug: "why-gated-communities-in-mokila-are-booming",
        title: "Why Gated Communities in Mokila are the New Resident Favorite",
        excerpt: "With the IT corridor getting saturated, Mokila has emerged as the perfect blend of serene luxury and incredible connectivity. Here is why families are prioritizing it over traditional hubs.",
        coverImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1200",
        author: {
            name: "Priya Nair",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
            role: "Director of Sales"
        },
        date: "Feb 28, 2026",
        readTime: "5 min read",
        category: "Market Trends"
    },
    {
        slug: "ultimate-checklist-buying-dtcp-approved-plots",
        title: "The Ultimate Checklist for Buying DTCP & HMDA Approved Plots",
        excerpt: "Navigating land purchases can be complex. Learn how to verify legal documents, cross-check permissions, and ensure your investment is completely secure.",
        coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
        author: {
            name: "Anil Kumar",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
            role: "Head of Projects"
        },
        date: "Feb 15, 2026",
        readTime: "8 min read",
        category: "Guides"
    },
    {
        slug: "future-of-smart-villas-in-kokapet",
        title: "The Future of Living: Smart Villas in Kokapet",
        excerpt: "From AI-driven security to automated climate control—explore how the newest premium villas in Kokapet are completely transforming the standard of luxury living in Hyderabad.",
        coverImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200",
        author: {
            name: "Priya Nair",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
            role: "Director of Sales"
        },
        date: "Jan 22, 2026",
        readTime: "4 min read",
        category: "Luxury Living"
    }
];

// Placeholder detailed content for demonstration
const dummyRichText = `
<p>Hyderabad's real estate market has been on an unprecedented upward trajectory, driven by robust infrastructure development, a booming IT sector, and proactive government policies. As we move deeper into 2026, the preferences of homebuyers and investors are shifting towards micro-markets that offer a blend of connectivity, lifestyle, and high appreciation potential.</p>

<h2>The Shift from Traditional Hubs</h2>

<p>For years, areas like Jubilee Hills, Banjara Hills, and Madhapur were the undisputed kings of Hyderabad real estate. However, saturation and soaring prices have paved the way for new growth corridors. The expansion of the Outer Ring Road (ORR) and the upcoming Regional Ring Road (RRR) have fundamentally altered the map of desirable locations.</p>

<blockquote>"The true value of real estate is not just in the land itself, but in the vision of what surrounds it in the years to come."</blockquote>

<h2>The Top Contenders</h2>

<p>Here is a closer look at the areas leading the charge:</p>

<ul>
  <li><strong>Shadnagar:</strong> Positioned strategically along NH-44, Shadnagar benefits from proximity to the aviation hub and pharmaceutical clusters. It remains highly affordable while promising exponential growth.</li>
  <li><strong>Mokila & Kokapet:</strong> The perfect extension to the Financial District. While Kokapet has established itself as an ultra-luxury villa destination, Mokila offers serene, expansive gated communities just minutes away.</li>
  <li><strong>Adibatla:</strong> The aerospace and defense hub of India. With major tech giants establishing massive campuses here, residential demand for premium plots is skyrocketing.</li>
  <li><strong>Tukkuguda:</strong> Also known as the 'Hardware Park' corridor, its direct link to the international airport and Srisailam Highway makes it extremely attractive for integrated townships.</li>
</ul>

<h2>Why Invest Now?</h2>

<p>The time to invest is before these micro-markets reach full maturity. HMDA and DTCP approved layouts in these regions ensure legal security while offering massive canvases for custom home building or pure capital appreciation.</p>

<p>At Pan Infra, we have strategically acquired and developed premium properties across these exact corridors to ensure our clients capture this upside. Whether you are looking for a villa in Kokapet or an investment plot in Shadnagar, the window of maximum opportunity is open now.</p>
`;

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    const post = BLOG_POSTS.find(p => p.slug === slug);
    if (post) {
        // Inject dummy rich text for all posts for the sake of the demonstration
        return { ...post, content: dummyRichText };
    }
    return undefined;
}
