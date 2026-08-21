import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="h-full bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500">
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        {/* Animated Heading */}
        <h1 className="font-extrabold text-white underline text-5xl mb-10 animate-bounce pt-4">
          About Me
        </h1>

        {/* Interactive Card */}
        <Card
          sx={{
            maxWidth: 800,
            backgroundColor: "#1f2937",
            color: "white",
            borderRadius: "16px",
            boxShadow: 8,
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: 16,
            },
          }}
        >
          <CardContent>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.2rem", lineHeight: 1.8, textAlign: "justify" }}
            >
              A motivated and detail-oriented Computer Engineering graduate
              actively seeking entry-level opportunities in Software Development
              or Data Analytics. Possesses a solid academic background with
              hands-on project experience in{" "}
              <span className="text-blue-400 font-semibold">
                Java Full-Stack (Core Java, Spring Boot, REST APIs)
              </span>{" "}
              and{" "}
              <span className="text-green-400 font-semibold">
                Python Full-Stack (Python, Django)
              </span>
              , along with{" "}
              <span className="text-pink-400 font-semibold">React.js</span> for
              building responsive frontend interfaces. Proficient in Data
              Analysis using{" "}
              <span className="text-yellow-400 font-semibold">
                SQL, Pandas, NumPy
              </span>
              , and visualization techniques to solve real-world problems. A
              fast learner and resilient problem-solver eager to contribute
              technical skills, adapt to industry workflows, and add value to an
              innovative engineering team.
            </Typography>

            {/* Call-to-action button */}
            <div className="flex justify-center mt-6 animate-pulse">
              <Button
                variant="contained"
                href="https://drive.google.com/file/d/1U_MgdlAlMa7OmMwDchwhvtCPiDw06dQW/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: "#4f46e5",
                  "&:hover": { backgroundColor: "#4338ca" },
                  fontWeight: "bold",
                  padding: "10px 20px",
                }}
              >
                View My Resume
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Divider */}
      <hr className="h-0.5 bg-amber-50 w-full mt-10" />

      {/* Footer */}
      <Footer className="w-full bottom-0 left-0 fixed" />
    </div>
  );
};

export default About;
