import React from "react";

interface BlogLayoutProps {
  title: string;
  description: string;
  image: string;
  children: React.ReactNode;
}

export default function BlogLayout({
  title,
  description,
  image,
  children,
}: BlogLayoutProps) {
  return (
    <div className="blog-container" style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ fontSize: "2.4rem", marginBottom: "1rem" }}>{title}</h1>

      <p style={{ fontSize: "1.2rem", marginBottom: "2rem", color: "#444" }}>
        {description}
      </p>

      <div style={{ marginBottom: "2rem" }}>
        <Image src={image} alt={title} width={900} height={500} />
      </div>

      <article style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
        {children}
      </article>
    </div>
  );
}
