"use client";

import { motion } from "framer-motion";

interface TechCategoryProps {
    title: string;
    skills: string[];
}

function TechCategory({ title, skills }: TechCategoryProps) {
    return (
        <div className="p-8 minimal-card rounded-sm">
            <h4 className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                {title}
            </h4>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="text-[11px] font-mono px-3 py-1.5 bg-white/5 text-slate-400 border border-white/5 hover:text-white hover:border-white/20 transition-all rounded-sm"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

const TECH_STACK = [
    {
        title: "Core Languages",
        skills: ["C++", "Python", "Java", "Go", "TypeScript"]
    },
    {
        title: "Backend Frameworks",
        skills: ["Spring Boot", "REST APIs", "Node.js", "Express", "Django", "FastAPI"]
    },
    {
        title: "Data & Inference",
        skills: ["PostgreSQL", "MongoDB", "scikit-learn", "Pandas", "NumPy", "InfluxDB"]
    },
    {
        title: "Infrastructure",
        skills: ["Docker", "Linux Systems", "CI/CD Pipelines", "Redis", "Cloud Services"]
    }
];

export function TechStackSection() {
    return (
        <section className="mt-48 pb-24">
            <div className="flex items-center gap-6 mb-16 px-2">
                <h2 className="text-2xl font-sans font-bold tracking-tight text-white uppercase">Technical Expertise</h2>
                <div className="h-[1px] flex-grow bg-border" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 focus-visible:outline-none">
                {TECH_STACK.map((category) => (
                    <TechCategory key={category.title} {...category} />
                ))}
            </div>
        </section>
    );
}
