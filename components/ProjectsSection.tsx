"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  color: string;
}

export default function ProjectsSection() {
  const theme = useTheme();

  const projects: Project[] = [
    {
      title: "AI-Driven Stock Prediction System",
      description:
        "Built a web application to predict stock market trends using machine learning models and real-time data ingestion.",
      technologies: ["Python", "Scikit-learn", "React.js", "AWS", "MongoDB"],
      image: "/stockPrediction.jpg?height=200&width=400",
      githubUrl: "https://github.com/Teja78906/stock-prediction", // Adjust if actual repo differs
      color: "#4ECDC4",
    },
    {
      title: "Cross-Domain Recommendation System",
      description:
        "A hybrid recommender system that suggests music based on book preferences using cross-domain learning.",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "NLTK", "Flask", "Pickle", "SciPy", "Flask-CORS"],
      image: "/cdrs.png?height=120&width=250",
      githubUrl: "https://github.com/Teja78906/cross-domain-recommender",
      color: "#9B5DE5",
    },
    {
      title: "Dharitri.org Blockchain Portal",
      description:
        "Frontend and backend for Dharitri blockchain ecosystem with wallet integration, validator onboarding, and AWS-backed Python backend.",
      technologies: ["Next.js", "Tailwind CSS", "Python", "AWS"],
      image: "/dharitri.png?height=200&width=400",
      githubUrl: "https://github.com/TerraDharitri/drt-website", // Or your frontend repo
      liveUrl: "https://dharitri.org", // Replace with actual if different

      color: "#FFD166",
    },
    {
      title: "VoteChain – On-Chain Governance and Polling Platform",
      description:
        "Designed and implemented Rust-based smart contracts compiled to WASM for decentralized polling and validator-governed proposals within the Dharitri blockchain ecosystem.",
      technologies: ["Rust", "WASM", "Dharitri", "Blockchain Governance"],
      image: "/voteChain.png?height=200&width=400",
      githubUrl: "https://github.com/teja78906/vote-chain-dapp-sample", // Update if needed
      liveUrl: "https://dharitri.org", // Replace with actual if different
      color: "#06D6A0",
    },
    {
      title: "AWS Misconfiguration Detection (Internship)",
      description:
        "Wrote security policies in Rego and Golang to detect IAM, EC2, Lambda misconfigurations as part of cloud security automation.",
      technologies: ["Go", "Rego", "AWS", "Docker"],
      image: "/awsAverlon.png?height=200&width=400",
      githubUrl: "https://github.com/Teja78906", // Replace if public
      liveUrl: "https://averlon.io",
      color: "#FF6B6B",
    },
    {
      title: "Log Analysis Using Splunk",
      description:
        "Designed Splunk dashboards and SPL queries for infrastructure monitoring, anomaly detection, and security alerts.",
      technologies: ["Splunk", "SPL", "Security Analytics"],
      image: "/splunk.png?height=200&width=400",
      githubUrl: "https://github.com/Teja78906/splunk-logs", // Replace with actual repo
      color: "#118AB2",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 md:py-24 relative"
      style={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
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
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23${theme.palette.primary.main.replace(
            "#",
            ""
          )}' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          zIndex: 0,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="relative inline-block">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-md">
                Featured Projects
              </h2>
              <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></span>
            </div>
          </motion.div>

          <p
            style={{ color: theme.palette.text.secondary }}
            className="max-w-2xl mx-auto pt-3"
          >
            A collection of my AI/ML, blockchain, and cybersecurity projects
            demonstrating real-world solutions in prediction systems, smart
            contracts, cloud security, and decentralized applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card
                className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:border-primary/50 relative"
                style={{
                  backgroundColor: theme.palette.background.paper,
                  borderColor: theme.palette.divider,
                }}
              >
                {/* Colorful top border - Mandana art inspired */}
                <div
                  className="h-2 absolute top-0 left-0 right-0"
                  style={{
                    background: `linear-gradient(90deg, ${project.color}, ${theme.palette.primary.main})`,
                  }}
                />

                {/* Mandana art inspired decorative element */}
                <div
                  className="absolute top-4 right-4 w-12 h-12 rounded-full opacity-10"
                  style={{ backgroundColor: project.color }}
                >
                  <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2"
                    style={{ borderColor: theme.palette.background.paper }}
                  />
                </div>

                <div className="h-48 overflow-hidden mt-2">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 flex-grow">
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: project.color }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{ color: theme.palette.text.secondary }}
                    className="mb-4 line-clamp-3"
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="border-primary/20"
                        style={{
                          backgroundColor: `${project.color}20`,
                          color: project.color,
                          borderColor: `${project.color}40`,
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter
                  className="p-6 pt-0 flex gap-3"
                  style={{ borderTopColor: theme.palette.divider }}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="hover:text-primary-foreground"
                    style={{
                      borderColor: project.color,
                      color: project.color,
                    }}
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      asChild
                      style={{ backgroundColor: project.color }}
                      className="hover:opacity-90"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
