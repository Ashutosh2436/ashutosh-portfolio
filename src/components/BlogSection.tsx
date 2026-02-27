"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";

const POSTS = [
    {
        title: "Optimizing AES-GCM for Large File Streaming in Node.js",
        date: "Feb 15, 2026",
        description: "Technical analysis of buffer management and memory pressure in authenticated encryption pipelines.",
        readTime: "8 min"
    },
    {
        title: "Handling Data Drift in Production ML Pipelines",
        date: "Jan 28, 2026",
        description: "Strategies for monitoring non-stationary data streams and Implementing Z-score detectors.",
        readTime: "12 min"
    },
    {
        title: "Clean Architecture: A Dependency Inversion Tale",
        date: "Dec 10, 2025",
        description: "Decoupling business logic from persistence layers for long-term maintainability.",
        readTime: "6 min"
    }
];

export function BlogSection() {
    return (
        <section className="mt-48 pb-24">
            <div className="flex items-center gap-6 mb-16 px-2">
                <h2 className="text-2xl font-sans font-bold tracking-tight text-white uppercase">Technical Deep Dives</h2>
                <div className="h-[1px] flex-grow bg-border" />
            </div>

            <div className="space-y-4">
                {POSTS.map((post, i) => (
                    <motion.div
                        key={post.title}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-sm minimal-card group cursor-pointer flex items-center justify-between gap-8"
                    >
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-4 mb-3 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                                <span>{post.date}</span>
                                <span className="w-1 h-1 bg-slate-700 rounded-full" />
                                <span>{post.readTime}</span>
                            </div>
                            <h3 className="text-xl font-sans font-bold text-white mb-3 group-hover:text-slate-400 transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-sm text-slate-400 leading-relaxed font-sans">
                                {post.description}
                            </p>
                        </div>
                        <ArrowRight size={20} className="text-slate-700 group-hover:text-white group-hover:translate-x-2 transition-all" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
