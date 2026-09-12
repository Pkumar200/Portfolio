import React from "react";
import SectionHead from "../ui/SectionHead";
import Reveal from "../ui/Reveal";
import { c, mono, serif } from "../../data/theme";

export default function About() {
  return (
    <section id="about" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 32px" }}>
        <SectionHead index="01" title="About" em="me" />
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, position: "relative", zIndex: 10 }} className="kk-grid-collapse">
          {/* Left Column: Elegant Typography */}
          <Reveal style={{ display: "flex", flexDirection: "column", gap: 32, justifyContent: "center" }}>
            <p style={{ margin: 0, fontSize: 24, lineHeight: 1.5, color: c.ink, fontWeight: 500, letterSpacing: "-0.01em" }}>
              I'm a <span style={{ color: c.mossDeep, fontStyle: "italic", ...serif }}>Full Stack Developer</span> with hands-on production experience across React, Next.js, Node.js, Express.js, and PostgreSQL.
            </p>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: c.inkSoft }}>
              I design and integrate RESTful APIs, build database-driven applications, and deploy containerized applications using Docker and AWS. I have a strong grounding in JavaScript, Python, SQL, and Git/GitHub, with experience building and optimizing end-to-end applications.
            </p>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: c.inkSoft }}>
              I've built full-stack products in production — from multi-role CRMs with JWT-secured REST APIs to AI-powered document processing pipelines — and I'm graduating with a <strong style={{ color: c.ink, fontWeight: 600 }}>B.E. in AI &amp; ML</strong> from Jyothy Institute of Technology.
            </p>
          </Reveal>

          {/* Right Column: Premium Bento Grid */}
          <Reveal delay={0.1} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignContent: "center" }}>

            {/* Bento 1: Impact Card */}
            <div style={{ gridColumn: "1 / -1", background: "rgba(255,255,255,0.4)", backdropFilter: "blur(12px)", border: `1px solid ${c.line}`, borderRadius: 24, padding: 32, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "relative", zIndex: 2 }}>
                <span style={{ ...mono, fontSize: 11, textTransform: "uppercase", letterSpacing: 1.5, color: c.mossDeep, fontWeight: 600 }}>Production Impact</span>
                <h4 style={{ ...serif, fontSize: 48, fontWeight: 600, color: c.ink, margin: "8px 0 4px 0", letterSpacing: "-0.02em" }}>15+ APIs</h4>

                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, flexWrap: "wrap", marginTop: 4 }}>
                  <p style={{ color: c.inkSoft, fontSize: 14, margin: 0, maxWidth: 320 }}>REST API modules designed across a multi-role CRM and lead-generation platform, secured with JWT authentication and role-based access control.</p>

                  <a
                    href="https://github.com/Pkumar200"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: c.ink,
                      color: c.paper,
                      padding: "10px 20px",
                      borderRadius: 30,
                      textDecoration: "none",
                      fontSize: 13,
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                      transition: "all 0.2s ease"
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.background = "#000"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.background = c.ink; }}
                  >
                    View GitHub
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
              {/* Decorative accent */}
              <div style={{ position: "absolute", right: -20, bottom: -40, fontSize: 120, opacity: 0.03, ...serif, fontWeight: 800, userSelect: "none", pointerEvents: "none" }}>PK</div>
            </div>

            {/* Bento 2: Academic */}
            <div style={{ background: "rgba(255,255,255,0.4)", backdropFilter: "blur(12px)", border: `1px solid ${c.line}`, borderRadius: 24, padding: 24, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <span style={{ ...mono, fontSize: 10, textTransform: "uppercase", letterSpacing: 1.5, color: c.gold, fontWeight: 600 }}>Education</span>
                <h4 style={{ fontSize: 20, fontWeight: 600, color: c.ink, margin: "12px 0 4px 0", letterSpacing: "-0.01em" }}>B.E in AI &amp; ML</h4>
                <p style={{ color: c.inkSoft, fontSize: 13, margin: 0, lineHeight: 1.5 }}>2021 – 2025 <br />Jyothy Institute of Technology, Bengaluru</p>
              </div>
            </div>

            {/* Bento 3: Focus */}
            <div style={{ background: "rgba(255,255,255,0.4)", backdropFilter: "blur(12px)", border: `1px solid ${c.line}`, borderRadius: 24, padding: 24, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <span style={{ ...mono, fontSize: 10, textTransform: "uppercase", letterSpacing: 1.5, color: c.clay, fontWeight: 600 }}>Core Focus</span>
                <h4 style={{ fontSize: 20, fontWeight: 600, color: c.ink, margin: "12px 0 4px 0", letterSpacing: "-0.01em" }}>Full Stack & Cloud</h4>
                <p style={{ color: c.inkSoft, fontSize: 13, margin: 0, lineHeight: 1.5 }}>Production APIs, containerized deployments, and AI-assisted document pipelines.</p>
              </div>
            </div>

          </Reveal>
        </div>
      </div>

      {/* Dynamic pulse CSS for dashboard widgets */}
      <style>{`
        @keyframes kk-pulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(42,39,30,0.2); }
          70% { transform: scale(1.08); box-shadow: 0 0 0 8px rgba(42,39,30,0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(42,39,30,0); }
        }
      `}</style>
    </section>
  );
}
