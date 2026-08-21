import React from "react";
import {
    Grid,
    Card,
    CardContent,
    Typography,
    Button,
    CardActionArea,
} from "@mui/material";
import Footer from "./Footer";

const courses = [
    {
        title: "Java Full Stack",
        platform: "Firstbit Solutions, Pune",
        duration: "7 months",
        certificate: "https://drive.google.com/file/d/1xkIlnZWkvkIHDU32S_LnU6-ywpUZhALP/view?usp=sharing",
        description:
            "Completed training in Java, Spring Boot, REST APIs, MySQL, React.js, HTML, CSS, and JavaScript with hands-on full-stack application development.",
    },
    {
        title: "Data Science",
        platform: "Code With Harry",
        duration: "5 months",
        certificate: "https://drive.google.com/file/d/12_aDQ0cBDvZLH0n34jg5ZdQv28Jp3MDq/view?usp=sharing",
        description:
            "Gained knowledge of Python, data analysis, data visualization, and fundamental concepts of data science.",
    },
    {
        title: "Prompt Engineering",
        platform: "ZCOER, Pune",
        duration: "2 days",
        certificate: "https://drive.google.com/file/d/1YuNTPlXrfkeJgwnvi40_U_lkiul_z0S5/view?usp=sharing",
        description:
            "Learned the fundamentals of prompt design, effective AI interactions, prompt optimization, and techniques for generating accurate and relevant outputs.",
    },
    {
        title: "100 Days of Python",
        platform: "Udemy",
        duration: "100 days",
        certificate: "https://drive.google.com/file/d/1Pnhm5cTnpmECtQGBg9tGLjd8ztKsEIF1/view?usp=sharing",
        description:
            "Gained foundational knowledge of Python programming, including variables, data types, control flow, functions, collections, and basic problem-solving.",
    },
];

const CourseWork = () => {
    return (
        <>
        <section
            style={{
                minHeight: "100vh",
                padding: "2rem",
                background:
                    "linear-gradient(to right, #4f46e5, #ec4899)",
            }}
        >
            <Typography
                variant="h3"
                align="center"
                gutterBottom
                style={{
                    color: "white",
                    textDecoration: "underline",
                }}
            >
                Course Work
            </Typography>

            {/* Responsive Grid */}
            <Grid
                container
                spacing={4}
                justifyContent="center"
                sx={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >
                {courses.map((course, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        key={index}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Card
                            sx={{
                                width: "100%",
                                maxWidth: "280px",
                                backgroundColor: "#1f2937",
                                color: "white",
                                borderRadius: "12px",
                                boxShadow: 6,
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                    boxShadow: 12,
                                },
                            }}
                        >
                            <CardActionArea>
                                <CardContent>
                                    <Typography
                                        variant="h5"
                                        gutterBottom
                                        sx={{
                                            color: "#60a5fa",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {course.title}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "#d1d5db",
                                        }}
                                    >
                                        Platform: {course.platform}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "#d1d5db",
                                        }}
                                    >
                                        Duration: {course.duration}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{ mt: 2 }}
                                    >
                                        {course.description}
                                    </Typography>

                                    <Button
                                        href={course.certificate}
                                        target="_blank"
                                        variant="contained"
                                        sx={{
                                            mt: 3,
                                            backgroundColor: "#4f46e5",
                                            "&:hover": {
                                                backgroundColor:
                                                    "#4338ca",
                                            },
                                        }}
                                    >
                                        View Certificate
                                    </Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            
        </section>
        <div>
<Footer/>
        </div>
        </>
    );
};

export default CourseWork;