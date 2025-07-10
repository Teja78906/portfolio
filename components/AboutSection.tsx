"use client";

import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  useTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { School, Work, Cloud, Code } from "@mui/icons-material";
import { motion } from "framer-motion";
import { JSX, useState } from "react";

// Type for highlight items
type HighlightItem = {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  description: string;
  details?: string;
  color: string;
};

export default function AboutSection() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<HighlightItem | null>(null);

  const highlights: HighlightItem[] = [
    {
      icon: <Work />,
      title: "Blockchain Developer",
      subtitle: "Dugong Global Services",
      description:
        "Built core protocol logic, Rust smart contracts, and dev tooling for the Dharitri PoS blockchain.",
      details: `Dugong Global Services, Hyderabad
Blockchain Developer
Aug 2024 – Present

Contributing to the core infrastructure and ecosystem tools of Dharitri — a scalable, sharded Proof-of-Stake blockchain platform.

• Protocol Development: Implemented validator rotation, transaction execution, and shard coordination logic using Go, enabling high throughput and secure consensus in a multi-shard architecture.

• Smart Contract Engineering: Designed and deployed Rust-based smart contracts for staking and governance; compiled to WASM to ensure cross-shard interoperability.

• Tooling & SDKs: Built developer-facing CLI tools in Python to interact with blockchain nodes, perform validator operations, and support scripting workflows.

• API Integration & Testing: Designed and tested REST and gRPC APIs for on-chain operations and cross-service communication; supported automated API testing in TypeScript test suites.

• Package Publishing: Maintained and published reusable packages to PyPI, crates.io, and npmjs.org, supporting a multi-language developer ecosystem.

• DevOps & Deployment: Contributed to CI/CD pipelines and Docker image releases via Docker Hub; enabled repeatable deployment and testing environments across QA and staging nodes.

• Cloud Infrastructure: Assisted with AWS-powered backend operations including S3 for state backups, EC2 for node deployments, CloudWatch for monitoring, and IAM for secure access control — ensuring reliability and scalability of the blockchain infrastructure.

• Frontend Collaboration: Worked closely with frontend teams to integrate wallet signing, account abstraction, and dApp workflows; validated transaction flows on internal testnet.`,
      color: "#FF6B6B",
    },
    {
      icon: <School />,
      title: "Student",
      subtitle: "NIT Kurukshetra (2020–2024)",
      description:
        "Graduated with a B.Tech in Computer Science and Engineering. Actively involved in projects across AI/ML, blockchain, and cybersecurity.",
      details: `During my B.Tech in Computer Science and Engineering at NIT Kurukshetra (2020–2024), I cultivated strong technical and problem-solving skills across domains like machine learning, blockchain, and cybersecurity. In the early semesters, I focused on mastering programming fundamentals in C/C++, data structures, and core subjects like operating systems and databases. My academic journey was complemented by hands-on project work, the most notable being my final-year project titled “Cross Domain Recommendation of Music Based on Book Preferences.” This project involved developing a recommendation engine that mapped book genres to music preferences using collaborative filtering and NLP-based content similarity. I implemented it using Python, pandas, NumPy, scikit-learn, nltk, Flask, and deployed the backend with pickle serialization. The frontend was built using React.js and Tailwind CSS, delivering a complete book-to-music recommendation interface.

Alongside academics, I interned at Averlon Technologies, where I worked on cloud security automation by writing Rego policies and Go scripts to detect misconfigurations in AWS services such as EC2, IAM, and Lambda. I also explored log monitoring and security analysis using Splunk, creating custom SPL dashboards and alerts for real-time anomaly detection. To deepen my understanding of cybersecurity, I completed the CEHv12 Master certification in-parallel to college-degree program, gaining practical experience in penetration testing, vulnerability assessment, and network security. I remain active on platforms like Hack The Box and continue to explore offensive and defensive security practices. With a CGPA of 8.0 and consistent engagement in real-world projects, my journey reflects a balance of academic rigor, hands-on development, and a deep passion for secure and intelligent systems.`,
      color: "#4ECDC4",
    },
    {
      icon: <Cloud />,
      title: "Software Engineer Intern",
      subtitle: "Averlon Technologies",
      description:
        "Worked on detection of AWS misconfigurations using Rego and Golang. Focused on EC2, IAM, and Lambda security policies.",
      details: `During my internship at Averlon Technologies (Jan 2023 – Jun 2023), I worked on automating the detection of AWS misconfigurations using Rego and Golang. I began by researching common cloud security pitfalls—such as public S3 buckets, overly permissive IAM policies, and exposed RDS snapshots—and then developed a suite of policy-as-code rules using Open Policy Agent (OPA) and Rego. These rules were designed to scan AWS resource configurations and flag violations such as lack of encryption, excessive permissions, or missing security best practices. I integrated these rules into the backend scanning engine using Golang, building RESTful APIs to run evaluations and process results. This project significantly improved the organization's ability to monitor cloud security posture in real time, reduced manual effort, and laid a solid foundation for scalable security automation.`,
      color: "#FFD166",
    },
    {
      icon: <Code />,
      title: "Full Stack AI/ML Intern",
      subtitle: "Wezenite Technologies",
      description:
        "Built a stock prediction web app using Scikit-learn and deployed it using AWS and MongoDB. Integrated frontend with React.",
      details: `From October to December 2024, I worked as a Full-Stack Developer at Wezenite Technologies, where I contributed to the development of a sentiment-driven stock analysis platform. I was actively involved in refining the frontend using React.js and Tailwind CSS, where I implemented and enhanced UI components based on Figma designs to create a seamless user experience. On the backend, I developed and tested RESTful APIs using Python, which were deployed as AWS Lambda functions and integrated via AWS API Gateway. These functions processed stock-related textual data using sentiment analysis—to generate real-time sentiment scores for individual stocks. I also handled deployment and hosting using AWS services, setting up serverless pipelines and configuring monitoring with CloudWatch. This end-to-end role gave me hands-on experience in designing UI, integrating backend logic, and deploying scalable serverless applications, while reinforcing my skills in cloud computing, API testing, and NLP-based analytics.`,
      color: "#06D6A0",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
      }}
    >
      {/* Mandana art inspired background pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23${theme.palette.primary.main.replace(
            "#",
            ""
          )}' fillOpacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 2,
              textAlign: "center",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              fontWeight: 700,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              position: "relative",
              display: "inline-block",
              left: "50%",
              transform: "translateX(-50%)",
              "&::after": {
                content: '""',
                position: "absolute",
                width: "80px",
                height: "4px",
                bottom: "-10px",
                left: "calc(50% - 40px)",
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: "2px",
              },
            }}
          >
            About Me
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: { xs: 4, md: 6 },
              textAlign: "center",
              color: theme.palette.text.secondary,
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.6,
              px: 2,
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            I'm a passionate Blockchain Developer and AI/ML enthusiast with
            strong roots in software development and Cybersecurity. From building secure
            decentralized apps to detecting AWS misconfigurations, I strive to
            create scalable, intelligent systems. A graduate from NIT
            Kurukshetra, I’m constantly exploring the intersection of
            innovation, performance, and security.
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {highlights.map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <motion.div variants={itemVariants}
                  whileHover={{ y: -8 }}
                  onClick={() => {
                    setSelectedItem(item);
                    setOpen(true);
                  }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "16px",
                      background:
                        theme.palette.mode === "dark"
                          ? "linear-gradient(145deg, #1a1a1a 0%, #2a2a2a 100%)"
                          : "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
                      border: `1px solid ${theme.palette.divider}`,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        boxShadow: `0 12px 40px ${item.color}30`,
                      },
                    }}
                  >
                    {/* Colorful left border - Mandana art inspired */}
                    <Box
                      sx={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: "6px",
                        background: `linear-gradient(to bottom, ${item.color}, ${theme.palette.primary.main})`,
                      }}
                    />

                    {/* Mandana art inspired decorative element */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 20,
                        right: 20,
                        width: "60px",
                        height: "60px",
                        opacity: 0.05,
                        borderRadius: "50%",
                        background: item.color,
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          border: `2px solid ${theme.palette.background.paper}`,
                        },
                      }}
                    />

                    <CardContent sx={{ p: 3, pl: 4 }}>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 2 }}
                      >
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: "12px",
                            backgroundColor: item.color + "20",
                            color: item.color,
                            mr: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {item.icon}
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            component="h3"
                            sx={{
                              fontWeight: 700,
                              fontSize: { xs: "1.1rem", sm: "1.25rem" },
                              color: item.color,
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              color: theme.palette.text.secondary,
                              fontWeight: 500,
                            }}
                          >
                            {item.subtitle}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.875rem", sm: "0.9rem" },
                        }}
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>

            ))}
          </Grid>
        </motion.div>
        <Dialog
          open={open}
          onClose={() => {
            setOpen(false);
            setSelectedItem(null);
          }}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle sx={{ fontWeight: 600, color: selectedItem?.color }}>
            {selectedItem?.title} @ {selectedItem?.subtitle}
          </DialogTitle>
          <DialogContent dividers>
            <Typography
              variant="body1"
              sx={{ whiteSpace: "pre-line", fontSize: "0.95rem", lineHeight: 1.7 }}
            >
              {selectedItem?.details === "to be updated"
                ? "Full description will be added soon."
                : selectedItem?.details}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setOpen(false);
                setSelectedItem(null);
              }}
              color="primary"
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
}
