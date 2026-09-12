import React from "react";
import SectionHead from "../ui/SectionHead";
import Reveal from "../ui/Reveal";
import ChipRow from "../ui/ChipRow";
import { c, mono, serif } from "../../data/theme";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "100px 0", position: "relative" }}>
      {/* Background container: zIndex 2 puts it above root background but behind the cursor (3) */}
      <div style={{ position: "absolute", inset: 0, background: c.bgDeep, zIndex: 2, pointerEvents: "none", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }} />
      {/* Main content div: zIndex 10 puts it above the cursor (3) */}
      <div style={{ position: "relative", zIndex: 10, maxWidth: 1080, margin: "0 auto", padding: "0 32px" }}>
        <SectionHead index="02" title="Career" em="road" />

        <div style={{ position: "relative", marginTop: 60, paddingBottom: 40 }}>
          {/* The Vertical Road Track */}
          <div
            style={{
              position: "absolute",
              left: 70, // Centers on the 140px left column
              top: 0,
              bottom: 0,
              width: 24,
              background: "#32372A", // Asphalt dark color
              transform: "translateX(-50%)",
              borderRadius: 12,
              border: `2px solid ${c.lineStrong}`,
              boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)",
              overflow: "hidden",
              zIndex: 1
            }}
            className="kk-road-track"
          >
            {/* Dotted/Dashed Road Line */}
            <div style={{
              width: 0,
              height: "100%",
              borderLeft: "2px dashed #E3B448", // Gold/Yellow road dash
              margin: "0 auto",
              opacity: 0.95
            }} />
          </div>

          {/* Timeline Milestones */}
          <div style={{ display: "flex", flexDirection: "column", gap: 60, position: "relative" }}>

            {/* Milestone 2: SDE (Full-Time) - CURRENT ROLE */}
            <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 48, position: "relative" }} className="kk-milestone-row">
              
              {/* Left Column: Icon and Date */}
              <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 20 }} className="kk-milestone-left">
                {/* Milestone Dot/Icon */}
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: c.mossDeep,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: c.paper,
                  zIndex: 2,
                  boxShadow: `0 0 0 10px ${c.bgDeep}`
                }} className="kk-milestone-dot">
                  <Briefcase size={20} strokeWidth={2} />
                </div>
                
                {/* Date under the icon */}
                <div style={{ 
                  textAlign: "center", 
                  marginTop: 24,
                  background: c.paper,
                  padding: "8px 16px",
                  borderRadius: 20,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  border: `1px solid ${c.line}`,
                  position: "relative",
                  zIndex: 5
                }} className="kk-milestone-date">
                  <div style={{ ...mono, fontSize: 11, color: c.clay, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>Aug 2025</div>
                  <div style={{ ...serif, fontSize: 15, color: c.ink, fontWeight: 600 }}>Aug 2026</div>
                </div>
              </div>

              {/* Card Container */}
              <div className="kk-milestone-card-container">
                <Reveal>
                  <div style={{
                    background: c.paper,
                    border: `1px solid ${c.line}`,
                    borderRadius: 16,
                    padding: 28,
                    boxShadow: "0 8px 30px rgba(42,39,30,0.06)",
                    position: "relative"
                  }}>
                    {/* Role Tag */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10 }}>
                      <span style={{
                        background: c.mossDeep,
                        color: c.paper,
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: 1.5,
                        ...mono,
                        padding: "4px 8px",
                        borderRadius: 4,
                        textTransform: "uppercase"
                      }}>
                        Full-Time
                      </span>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, ...mono, fontSize: 12, color: c.inkFaint }}>
                        <Calendar size={13} />
                        Aug 2025 - Aug 2026
                      </div>
                    </div>

                    <h3 style={{ ...serif, fontSize: 22, fontWeight: 600, marginTop: 14, color: c.ink }}>
                      Full-Stack Developer
                    </h3>
                    <div style={{ color: c.clay, fontWeight: 600, marginTop: 4, fontSize: 14, ...mono }}>
                      NICSAN Insurance Marketing LLP · Bengaluru, India
                    </div>

                    <p style={{ color: c.inkSoft, fontSize: 14.5, lineHeight: 1.6, marginTop: 14, marginBottom: 18 }}>
                      Built two full-stack products in production — a multi-role CRM and a lead-generation marketing website — using React, Node.js, Express, and PostgreSQL.
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                      {[
                        "Built a multi-role CRM (policy onboarding, telecaller management, founder analytics) and a lead-generation marketing website (insurance pages, consultation booking, Get My Best Plan) using React, Node.js, Express, and PostgreSQL",
                        "Designed 15+ REST API modules across both platforms, secured with JWT authentication and role-based access control",
                        "Architected a dual-storage system (AWS S3 + PostgreSQL/Aurora) for data reliability, backup, and high availability",
                        "Developed an AI-powered document processing pipeline using OpenAI GPT-4o-mini to extract structured data from PDFs, reducing manual data entry by ~60%",
                        "Automated platform workflows including cron-based consultation slot generation and branch report scheduling, improving scheduling efficiency and operational visibility",
                        "Deployed and managed containerized applications on AWS (ECS, ECR, EC2, Aurora/RDS, S3, CloudFront, VPC, CloudWatch), ensuring scalability and production-grade monitoring",
                        "Integrated WhatsApp Business API and email automation, enabling real-time customer communication and lead engagement"
                      ].map((item, idx) => (
                        <div key={idx} style={{ display: "flex", gap: 8, fontSize: 13.5, color: c.inkSoft, lineHeight: 1.4 }}>
                          <span style={{ color: c.clay }}>▸</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <ChipRow items={["React", "Node.js", "Express", "PostgreSQL", "AWS", "Docker", "JWT", "OpenAI GPT-4o-mini", "WhatsApp Business API"]} bg="rgba(164,89,47,0.08)" fg={c.clay} />
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Milestone 1: SDE Intern */}
            <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 48, position: "relative" }} className="kk-milestone-row">
              
              {/* Left Column: Icon and Date */}
              <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 20 }} className="kk-milestone-left">
                {/* Milestone Dot/Icon */}
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: c.clay,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: c.paper,
                  zIndex: 2,
                  boxShadow: `0 0 0 10px ${c.bgDeep}`
                }} className="kk-milestone-dot">
                  <GraduationCap size={22} strokeWidth={2} />
                </div>
                
                {/* Date under the icon */}
                <div style={{ 
                  textAlign: "center", 
                  marginTop: 24,
                  background: c.paper,
                  padding: "8px 16px",
                  borderRadius: 20,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  border: `1px solid ${c.line}`,
                  position: "relative",
                  zIndex: 5
                }} className="kk-milestone-date">
                  <div style={{ ...mono, fontSize: 11, color: c.clay, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>Feb 2025</div>
                  <div style={{ ...serif, fontSize: 15, color: c.ink, fontWeight: 600 }}>Jul 2025</div>
                </div>
              </div>

              {/* Card Container */}
              <div className="kk-milestone-card-container">
                <Reveal>
                  <div style={{
                    background: c.paper,
                    border: `1px solid ${c.line}`,
                    borderRadius: 16,
                    padding: 28,
                    boxShadow: "0 8px 30px rgba(42,39,30,0.06)",
                    position: "relative"
                  }}>
                    {/* Role Tag */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10 }}>
                      <span style={{
                        background: c.moss,
                        color: c.paper,
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: 1.5,
                        ...mono,
                        padding: "4px 8px",
                        borderRadius: 4,
                        textTransform: "uppercase"
                      }}>
                        Full-Time
                      </span>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, ...mono, fontSize: 12, color: c.inkFaint }}>
                        <Calendar size={13} />
                        Feb 2025 - Jul 2025
                      </div>
                    </div>

                    <h3 style={{ ...serif, fontSize: 22, fontWeight: 600, marginTop: 14, color: c.ink }}>
                      Software Engineer
                    </h3>
                    <div style={{ color: c.clay, fontWeight: 600, marginTop: 4, fontSize: 14, ...mono }}>
                      Varthak Technologies Pvt Ltd
                    </div>

                    <p style={{ color: c.inkSoft, fontSize: 14.5, lineHeight: 1.6, marginTop: 14, marginBottom: 18 }}>
                      Developed and maintained Zoho Creator-based business applications, automating workflows and access controls for multiple clients.
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                      {[
                        "Developed and maintained Zoho Creator-based business applications including complex forms, workflows, validations, and reporting dashboards for multiple clients",
                        "Automated business processes using Deluge scripting, reducing manual effort by an estimated 40% and minimizing operational errors across client workflows",
                        "Designed dynamic role-based access controls, improving data accuracy and user experience across applications",
                        "Delivered customised low-code solutions for client-facing projects, resolving business-specific data handling challenges and improving application performance"
                      ].map((item, idx) => (
                        <div key={idx} style={{ display: "flex", gap: 8, fontSize: 13.5, color: c.inkSoft, lineHeight: 1.4 }}>
                          <span style={{ color: c.moss }}>▸</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <ChipRow items={["Zoho Creator", "Deluge Scripting", "Low-Code", "Role-Based Access"]} bg="rgba(86,96,71,0.08)" fg={c.mossDeep} />
                  </div>
                </Reveal>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* CSS adjustments for mobile styling of the road timeline */}
      <style>{`
        @media (max-width: 800px) {
          .kk-road-track {
            left: 40px !important;
          }
          .kk-milestone-row {
            grid-template-columns: 80px 1fr !important;
            gap: 16px !important;
          }
          .kk-milestone-left {
            padding-top: 10px !important;
          }
          .kk-milestone-dot {
            width: 36px !important;
            height: 36px !important;
            box-shadow: 0 0 0 6px #FAF7F0 !important;
          }
          .kk-milestone-dot svg {
            width: 16px !important;
            height: 16px !important;
          }
          .kk-milestone-date {
            margin-top: 16px !important;
          }
          .kk-milestone-date > div:first-child {
            font-size: 9px !important;
          }
          .kk-milestone-date > div:last-child {
            font-size: 14px !important;
          }
          .kk-milestone-card-container {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
