import React, { useState } from "react";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      id: 1,
      title: "EduTeen",
      subtitle: "Interactive Educational Platform",
      description:
        "A vibrant, voice-enabled learning web app for teenagers covering 6 subjects: Math, Space, History, Sports, Culture & Health. Features interactive games, quizzes with score tracking, text-to-speech, voice navigation, and colorful responsive design.",
      tech: ["React.js", "CSS", "Web Speech API"],
      github: "https://github.com/SHEENA2024/EduTeen",
      icon: "🎓",
      color: "#FFD700",
    },
    {
      id: 2,
      title: "Heart Disease Predictor and Awareness Platform",
      subtitle: "ML-Based Health Risk Assessment",
      description:
        "An ML-based heart disease prediction app that analyzes key medical parameters to determine a user's risk level. Includes an integrated health-awareness module offering tips on prevention, lifestyle improvements, and early care.",
      tech: ["Python", "Machine Learning"],
      github: "https://github.com/SHEENA2024/Heartdiseaseapp",
      icon: "❤️",
      color: "#FF6B6B",
    },
    {
      id: 3,
      title: "Virtual Board",
      subtitle: "AI-Powered Air Canvas",
      description:
        "A real-time Air Canvas built with Python, OpenCV, and MediaPipe that lets users draw in the air using finger movements—no touch or stylus required. Tracks hand landmarks, detects gestures for drawing or pausing, and provides smooth line rendering with various color options.",
      tech: ["Python", "OpenCV", "MediaPipe"],
      github: "https://github.com/SHEENA2024/Virtual-Board",
      icon: "✍️",
      color: "#4ECDC4",
    },
    {
      id: 4,
      title: "Sheena Portfolio",
      subtitle: "Modern Developer Portfolio",
      description:
        "A modern and responsive ReactJS portfolio showcasing projects, skills, and experience. Built with clean UI design, smooth animations, and reusable components to highlight work as a developer.",
      tech: ["React.js", "CSS"],
      github: "https://github.com/SHEENA2024/Sheena-portfolio",
      icon: "💼",
      color: "#9B59B6",
    },
    {
      id: 5,
      title: "AI Breast Cancer Detection",
      subtitle: "Deep Learning Medical Diagnosis",
      description:
        "An AI-based breast cancer detection system using a custom CNN with attention mechanisms to classify mammographic images into Normal, Benign, or Malignant. Features a user-friendly GUI that displays class predictions with confidence scores.",
      tech: ["Python", "TensorFlow", "CNN", "Deep Learning"],
      github: null,
      icon: "🔬",
      color: "#E91E63",
    },
    {
      id: 6,
      title: "Farm-Advisor",
      subtitle: "Voice-Enabled Agriculture Assistant",
      description:
        "An offline, voice-enabled platform that empowers farmers to get instant, accurate answers to their agriculture-related questions in English or Hindi. Designed to bridge the technology gap for rural communities with accessible voice interaction.",
      tech: ["Python", "Speech Recognition", "NLP", "Multilingual"],
      github: "https://github.com/SHEENA2024/Farm-advisor",
      icon: "🌾",
      color: "#4CAF50",
    },
  ];

  const styles = {
    projectsSection: {
      minHeight: "100vh",
      padding: "80px 20px",
      background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)",
      position: "relative",
      overflow: "hidden",
    },
    backgroundDecor: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: "hidden",
      pointerEvents: "none",
    },
    gradientOrb1: {
      position: "absolute",
      width: "600px",
      height: "600px",
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%)",
      top: "-200px",
      right: "-200px",
      animation: "float 8s ease-in-out infinite",
    },
    gradientOrb2: {
      position: "absolute",
      width: "400px",
      height: "400px",
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(255, 193, 7, 0.08) 0%, transparent 70%)",
      bottom: "-100px",
      left: "-100px",
      animation: "float 10s ease-in-out infinite reverse",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      position: "relative",
      zIndex: 1,
    },
    header: {
      textAlign: "center",
      marginBottom: "60px",
    },
    sectionTitle: {
      fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
      fontWeight: "800",
      background: "linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FFD700 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      marginBottom: "16px",
      letterSpacing: "-1px",
    },
    sectionSubtitle: {
      fontSize: "1.2rem",
      color: "rgba(255, 255, 255, 0.7)",
      fontWeight: "300",
      maxWidth: "600px",
      margin: "0 auto",
      lineHeight: "1.6",
    },
    goldenLine: {
      width: "100px",
      height: "4px",
      background: "linear-gradient(90deg, transparent, #FFD700, transparent)",
      margin: "24px auto 0",
      borderRadius: "2px",
    },
    projectsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
      gap: "30px",
      padding: "20px 0",
    },
    projectCard: {
      background: "linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
      borderRadius: "24px",
      padding: "32px",
      position: "relative",
      overflow: "hidden",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 215, 0, 0.1)",
      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      cursor: "pointer",
    },
    projectCardHovered: {
      transform: "translateY(-10px)",
      boxShadow: "0 30px 60px rgba(255, 215, 0, 0.15), 0 0 40px rgba(255, 215, 0, 0.1)",
      border: "1px solid rgba(255, 215, 0, 0.3)",
    },
    cardGlow: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "3px",
      background: "linear-gradient(90deg, #FFD700, #FFA500, #FFD700)",
      opacity: 0,
      transition: "opacity 0.3s ease",
    },
    cardGlowVisible: {
      opacity: 1,
    },
    iconWrapper: {
      width: "70px",
      height: "70px",
      borderRadius: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "32px",
      marginBottom: "20px",
      position: "relative",
      transition: "transform 0.3s ease",
    },
    projectNumber: {
      position: "absolute",
      top: "-10px",
      right: "-10px",
      width: "28px",
      height: "28px",
      borderRadius: "50%",
      background: "linear-gradient(135deg, #FFD700, #FFA500)",
      color: "#1a1a2e",
      fontSize: "14px",
      fontWeight: "700",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    projectTitle: {
      fontSize: "1.5rem",
      fontWeight: "700",
      color: "#ffffff",
      marginBottom: "6px",
      transition: "color 0.3s ease",
    },
    projectTitleHovered: {
      color: "#FFD700",
    },
    projectSubtitle: {
      fontSize: "0.95rem",
      color: "rgba(255, 215, 0, 0.8)",
      fontWeight: "500",
      marginBottom: "16px",
      letterSpacing: "0.5px",
    },
    projectDescription: {
      fontSize: "0.95rem",
      color: "rgba(255, 255, 255, 0.7)",
      lineHeight: "1.7",
      marginBottom: "20px",
    },
    techStack: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
      marginBottom: "24px",
    },
    techTag: {
      padding: "6px 14px",
      borderRadius: "20px",
      fontSize: "0.8rem",
      fontWeight: "500",
      background: "rgba(255, 215, 0, 0.1)",
      color: "#FFD700",
      border: "1px solid rgba(255, 215, 0, 0.2)",
      transition: "all 0.3s ease",
    },
    githubLink: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "12px 24px",
      borderRadius: "12px",
      background: "linear-gradient(135deg, rgba(255, 215, 0, 0.15) 0%, rgba(255, 165, 0, 0.15) 100%)",
      color: "#FFD700",
      textDecoration: "none",
      fontSize: "0.95rem",
      fontWeight: "600",
      border: "1px solid rgba(255, 215, 0, 0.3)",
      transition: "all 0.3s ease",
    },
    githubLinkHovered: {
      background: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
      color: "#1a1a2e",
      transform: "scale(1.05)",
    },
    comingSoon: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "12px 24px",
      borderRadius: "12px",
      background: "rgba(255, 255, 255, 0.05)",
      color: "rgba(255, 255, 255, 0.5)",
      fontSize: "0.95rem",
      fontWeight: "500",
      border: "1px dashed rgba(255, 255, 255, 0.2)",
    },
    githubIcon: {
      width: "20px",
      height: "20px",
    },
    keyframesStyle: `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-30px) rotate(5deg); }
      }
      @keyframes shimmer {
        0% { background-position: -200% center; }
        100% { background-position: 200% center; }
      }
    `,
  };

  const GitHubIcon = () => (
    <svg style={styles.githubIcon} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );

  return (
    <>
      <style>{styles.keyframesStyle}</style>
      <section style={styles.projectsSection} id="projects">
        <div style={styles.backgroundDecor}>
          <div style={styles.gradientOrb1}></div>
          <div style={styles.gradientOrb2}></div>
        </div>

        <div style={styles.container}>
          <header style={styles.header}>
            <h2 style={styles.sectionTitle}>✨ My Projects</h2>
            <p style={styles.sectionSubtitle}>
              A showcase of my passion projects — from AI-powered applications to interactive web experiences
            </p>
            <div style={styles.goldenLine}></div>
          </header>

          <div style={styles.projectsGrid}>
            {projects.map((project, index) => (
              <article
                key={project.id}
                style={{
                  ...styles.projectCard,
                  ...(hoveredIndex === index ? styles.projectCardHovered : {}),
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  style={{
                    ...styles.cardGlow,
                    ...(hoveredIndex === index ? styles.cardGlowVisible : {}),
                  }}
                ></div>

                <div
                  style={{
                    ...styles.iconWrapper,
                    background: `linear-gradient(135deg, ${project.color}20 0%, ${project.color}10 100%)`,
                    border: `2px solid ${project.color}40`,
                    transform: hoveredIndex === index ? "scale(1.1) rotate(-5deg)" : "scale(1)",
                  }}
                >
                  <span>{project.icon}</span>
                  <span style={styles.projectNumber}>{project.id}</span>
                </div>

                <h3
                  style={{
                    ...styles.projectTitle,
                    ...(hoveredIndex === index ? styles.projectTitleHovered : {}),
                  }}
                >
                  {project.title}
                </h3>
                <p style={styles.projectSubtitle}>{project.subtitle}</p>
                <p style={styles.projectDescription}>{project.description}</p>

                <div style={styles.techStack}>
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      style={{
                        ...styles.techTag,
                        borderColor: `${project.color}40`,
                        color: project.color,
                        background: `${project.color}15`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      ...styles.githubLink,
                      ...(hoveredIndex === index ? styles.githubLinkHovered : {}),
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <GitHubIcon />
                    View on GitHub
                  </a>
                ) : (
                  <span style={styles.comingSoon}>
                    🚀 Coming Soon to GitHub
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
