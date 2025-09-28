import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Dynamic features data
const features = [
  { id: 1, title: "Speaking Practice", text: "Interactive sessions with AI feedback.", icon: "🎤" },
  { id: 2, title: "Mock Tests", text: "Simulate real IELTS exams online.", icon: "📝" },
  { id: 3, title: "AI Band Score", text: "Get instant predicted IELTS scores.", icon: "🤖" },
  { id: 4, title: "Expert Guidance", text: "Mentorship from certified trainers.", icon: "👩‍🏫" }
];

// Dynamic testimonials data
const testimonials = [
  { id: 1, name: "Rahul Sharma", text: "This institute helped me score Band 8!", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 2, name: "Priya Verma", text: "Mock tests felt like the real exam!", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 3, name: "Aman Gupta", text: "AI feedback improved my speaking confidence.", img: "https://randomuser.me/api/portraits/men/54.jpg" }
];

// Routes
app.get("/api/features", (req, res) => res.json(features));
app.get("/api/testimonials", (req, res) => res.json(testimonials));

app.post("/api/contact", (req, res) => {
  console.log("Contact Form Submitted:", req.body);
  res.json({ message: "Your message has been received!" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));

