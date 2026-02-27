"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Cpu, Zap, Activity } from "lucide-react";

interface CaseStudyProps {
    title: string;
    context: string;
    architecture: string;
    decisions: { point: string; reasoning: string }[];
    failures: { scenario: string; mitigation: string }[];
    performance: string;
    security?: string;
    evolution: string;
}

export function ProjectCaseStudy({ title, context, architecture, decisions, failures, performance, security, evolution }: CaseStudyProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32 last:mb-0 border-b border-border pb-32 last:border-0"
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-4">
                    <h3 className="text-4xl font-sans font-bold tracking-tighter mb-6 text-white uppercase italic">
                        {title}
                    </h3>
                    <div className="flex gap-4 mb-8">
                        <button className="flex items-center gap-2 text-[10px] font-mono border border-border px-4 py-2 hover:bg-white/5 transition-colors uppercase tracking-widest rounded-sm">
                            <Github size={14} /> Repository
                        </button>
                        <button className="flex items-center gap-2 text-[10px] font-mono border border-border px-4 py-2 hover:bg-white/5 transition-colors uppercase tracking-widest rounded-sm text-white">
                            <ExternalLink size={14} /> Deployment
                        </button>
                    </div>

                    <div className="space-y-8 mt-12">
                        <div className="p-6 bg-white/[0.02] border border-white/5 rounded-sm">
                            <span className="text-slate-500 font-mono text-[10px] uppercase tracking-widest block mb-3">Core Problem</span>
                            <p className="text-slate-300 leading-relaxed text-sm font-sans">
                                {context}
                            </p>
                        </div>

                        <div className="p-6 border border-white/5 rounded-sm">
                            <span className="text-slate-500 font-mono text-[10px] uppercase tracking-widest block mb-3">System Health</span>
                            <div className="flex justify-between items-center text-[10px] font-mono">
                                <span className="text-slate-400 uppercase tracking-widest">Latency</span>
                                <span className="text-white font-bold tracking-tight">{performance.split(' ')[0]}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-8 space-y-8">
                    {/* Architecture */}
                    <div className="minimal-card p-8 rounded-sm">
                        <h4 className="flex items-center gap-3 text-xs font-mono font-bold mb-6 text-slate-200 uppercase tracking-widest">
                            <Cpu size={18} className="text-slate-400" /> Infrastructure Design
                        </h4>
                        <div className="bg-black/50 p-6 rounded-sm font-mono text-[11px] text-slate-400 border border-white/5 leading-relaxed overflow-x-auto whitespace-pre">
                            {architecture}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Decisions */}
                        <div className="minimal-card p-8 rounded-sm">
                            <h4 className="flex items-center gap-3 text-xs font-mono font-bold mb-6 text-slate-200 uppercase tracking-widest">
                                <Zap size={18} className="text-slate-400" /> Engineering Rationale
                            </h4>
                            <div className="space-y-6">
                                {decisions.map((d, i) => (
                                    <div key={i}>
                                        <span className="text-white font-mono text-[10px] block mb-2 uppercase tracking-wide">0{i + 1} {d.point}</span>
                                        <p className="text-slate-400 text-xs leading-relaxed">{d.reasoning}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mitigation */}
                        <div className="minimal-card p-8 rounded-sm border-red-500/10 hover:border-red-500/20 transition-colors">
                            <h4 className="flex items-center gap-3 text-xs font-mono font-bold mb-6 text-red-200/80 uppercase tracking-widest">
                                <Activity size={18} className="text-red-900/60" /> Operational Response
                            </h4>
                            <div className="space-y-6">
                                {failures.map((f, i) => (
                                    <div key={i} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                        <span className="text-red-400/70 font-mono text-[9px] block mb-2 uppercase tracking-tight">Scenario: {f.scenario}</span>
                                        <p className="text-slate-400 text-xs leading-relaxed italic underline decoration-red-900/30 underline-offset-4 decoration-2">Mitigation: {f.mitigation}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="minimal-card p-8 rounded-sm bg-white/[0.01]">
                        <h4 className="text-[10px] font-mono font-bold mb-4 text-slate-500 uppercase tracking-widest tracking-[0.2em]">Architecture Evolution Path</h4>
                        <p className="text-slate-300 text-sm leading-relaxed font-sans border-l border-white/10 pl-6 py-2">
                            {evolution}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
