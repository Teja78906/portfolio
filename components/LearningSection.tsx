"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Award, Clock } from "lucide-react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface Course {
  title: string;
  provider: string;
  progress: number;
  completionDate?: string;
  skills: string[];
  status: "completed" | "in-progress" | "planned";
  color: string;
}

export default function LearningSection() {
  const theme = useTheme();

  const courses: Course[] = [
    {
      title: "Certified Ethical Hacker Master(CEHv12)",
      provider: "EC-Council",
      progress: 100,
      completionDate: "June 2024",
      skills: ["Penetration Testing", "Malware Analysis", "Network Security"],
      status: "completed",
      color: "#FF6B6B",
    },
    {
      title: "AWS Security & Governance",
      provider: "Averlon Technologies (Internship)",
      progress: 100,
      completionDate: "June 2023",
      skills: ["AWS", "Rego", "IAM", "Security Automation"],
      status: "completed",
      color: "#4ECDC4",
    },
    {
      title: "Rust Smart Contracts",
      provider: "Dugong Blockchain Team",
      progress: 80,
      skills: ["Rust", "WASM", "Smart Contracts", "Blockchain"],
      status: "in-progress",
      color: "#FFD166",
    },
    {
      title: "Golang for Blockchain Systems",
      provider: "Dugong Blockchain Team",
      progress: 90,
      skills: ["Golang", "Validator Rotation", "Distributed Systems"],
      status: "in-progress",
      color: "#06D6A0",
    },
    {
      title: "AI for Stock Market Prediction",
      provider: "Wezenite Technologies",
      progress: 100,
      completionDate: "Dec 2023",
      skills: ["Python", "Scikit-learn", "AWS", "MongoDB"],
      status: "completed",
      color: "#118AB2",
    },
    {
      title: "Cross-Domain Recommender System",
      provider: "Independent Project",
      progress: 100,
      completionDate: "Apr 2024",
      skills: ["ML", "NLP", "Recommendation Engines"],
      status: "completed",
      color: "#9B5DE5",
    },
    {
      title: "Splunk for Security Analytics",
      provider: "Hands-on Lab",
      progress: 100,
      completionDate: "Oct 2023",
      skills: ["SPL", "Log Analysis", "Alerting"],
      status: "completed",
      color: "#F3722C",
    },
    {
      title: "Security Engineer Certificate",
      provider: "Pro5.ai",
      progress: 100,
      completionDate: "October 2024",
      skills: ["Network Security", "Penetration Testing", "Cloud Security", "IAM", "Vulnerability Assessment", "Incident Response"],
      status: "completed",
      color: "#FF9F1C",
    },
    // {
    //   title: "Python CLI & TypeScript dApps",
    //   provider: "Dugong Internal Tools",
    //   progress: 70,
    //   skills: ["Python", "TypeScript", "Blockchain CLI", "dApps"],
    //   status: "in-progress",
    //   color: "#00B4D8",
    // },
  ];

  const getStatusIcon = (status: Course["status"]) => {
    switch (status) {
      case "completed":
        return (
          <Award
            className="h-5 w-5"
            style={{ color: theme.palette.primary.main }}
          />
        );
      case "in-progress":
        return (
          <Clock
            className="h-5 w-5"
            style={{ color: theme.palette.primary.main }}
          />
        );
      case "planned":
        return (
          <BookOpen
            className="h-5 w-5"
            style={{ color: theme.palette.primary.main }}
          />
        );
    }
  };

  const getStatusText = (status: Course["status"]) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      case "planned":
        return "Planned";
    }
  };

  return (
    <section
      id="learning"
      className="py-16 md:py-24 relative"
      style={{
        backgroundColor: theme.palette.mode === "dark" ? "#111111" : "#f8f9fa",
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
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23${theme.palette.primary.main.replace(
            "#",
            ""
          )}' fillOpacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
                Learning & Certifications
              </h2>
              <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></span>
            </div>
          </motion.div>

          <p
            style={{ color: theme.palette.text.secondary }}
            className="max-w-2xl mx-auto pt-3"
          >
            Continuous learning through hands-on projects, certifications like
            CEHv12, and courses in AI, Blockchain, and Cybersecurity to stay
            current with emerging technologies and industry practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
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
                    background: `linear-gradient(90deg, ${course.color}, ${theme.palette.primary.main})`,
                  }}
                />

                {/* Mandana art inspired decorative element */}
                <div
                  className="absolute top-4 right-4 w-10 h-10 rounded-full opacity-10"
                  style={{ backgroundColor: course.color }}
                >
                  <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2"
                    style={{ borderColor: theme.palette.background.paper }}
                  />
                </div>

                <CardContent className="p-6 flex flex-col h-full mt-2">
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1"
                      style={{ borderColor: course.color, color: course.color }}
                    >
                      {getStatusIcon(course.status)}
                      <span>{getStatusText(course.status)}</span>
                    </Badge>
                    {course.completionDate && (
                      <span
                        className="text-xs"
                        style={{ color: theme.palette.text.secondary }}
                      >
                        {course.completionDate}
                      </span>
                    )}
                  </div>

                  <h3
                    className="text-xl font-semibold mb-1"
                    style={{ color: course.color }}
                  >
                    {course.title}
                  </h3>
                  <p
                    style={{ color: theme.palette.text.secondary }}
                    className="mb-4"
                  >
                    {course.provider}
                  </p>

                  <div className="mt-auto">
                    <div className="flex justify-between text-sm mb-1">
                      <span style={{ color: theme.palette.text.primary }}>
                        Progress
                      </span>
                      <span
                        className="font-medium"
                        style={{ color: course.color }}
                      >
                        {course.progress}%
                      </span>
                    </div>
                    <Progress value={course.progress} className="h-2" />

                    <div className="flex flex-wrap gap-2 mt-4">
                      {course.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="border-primary/20"
                          style={{
                            backgroundColor: `${course.color}20`,
                            color: course.color,
                            borderColor: `${course.color}40`,
                          }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
