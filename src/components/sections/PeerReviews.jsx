import React from "react";
import SectionHead from "../ui/SectionHead";
import { AnimatedTestimonials } from "../ui/animated-testimonials";
import { c } from "../../data/theme";

export default function PeerReviews() {
  const testimonials = [
    {
      quote:
        "Kumaraswamy's AI-powered document pipeline cut our manual data entry by roughly 60%. He moved from prototype to production fast without cutting corners on reliability.",
      name: "Ajay",
      designation: "Data Scientist",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop",
    },
    {
      quote:
        "Working with Kumaraswamy on full stack apps is a breeze. His React and Next.js architecture choices keep the frontend fast and maintainable while the backend stays clean and well-documented.",
      name: "Digvijay",
      designation: "Full Stack Developer",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote:
        "He designed 15+ REST API modules for our platform with proper JWT auth and role-based access, and it's held up well under real production traffic.",
      name: "Shivam Bhardwaj",
      designation: "Software Engineer",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote:
        "He combines strong backend capabilities in Node.js and Express with a solid eye for database design. A dependable developer who ships clean, reusable code.",
      name: "Rajat",
      designation: "Full Stack Developer",
      src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote:
        "Kumaraswamy makes deployment and cloud operations smooth. His container setups on AWS (ECS, RDS, S3, CloudFront) made our staging and production environments reproducible and easy to monitor.",
      name: "Shivalik",
      designation: "DevOps Engineer",
      src: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?q=80&w=3540&auto=format&fit=crop",
    },
  ];

  return (
    <section id="peer-reviews" style={{ padding: "100px 0", position: "relative" }}>
      {/* Translucent background with backdrop blur so mouse animations show behind */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(214, 205, 178, 0.42)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 5, maxWidth: 1080, margin: "0 auto", padding: "0 32px", width: "100%" }}>
        <SectionHead index="08" title="Featured" em="testimonials" />

        <div style={{ marginTop: 40 }}>
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </div>
    </section>
  );
}
