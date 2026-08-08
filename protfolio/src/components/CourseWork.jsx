import React from "react";
import {
    Grid,
    Card,
    CardContent,
    Typography,
    Button,
    CardActionArea,
} from "@mui/material";

const courses = [
    {
        title: "React.js for Beginners",
        platform: "Udemy",
        duration: "6 weeks",
        certificate: "#",
        description:
            "Learned fundamentals of React including hooks, state, and props.",
    },
    {
        title: "Spring Boot & JPA",
        platform: "Coursera",
        duration: "8 weeks",
        certificate: "#",
        description:
            "Built REST APIs with Spring Boot and integrated JPA for persistence.",
    },
    {
        title: "Database Design",
        platform: "edX",
        duration: "4 weeks",
        certificate: "#",
        description:
            "Covered SQL, schema design, and optimization techniques.",
    },
    {
        title: "Advanced Java",
        platform: "Udemy",
        duration: "5 weeks",
        certificate: "#",
        description:
            "Deep dive into Java OOP, multithreading, and performance tuning.",
    },
];

const CourseWork = () => {
    return (
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
    );
};

export default CourseWork;