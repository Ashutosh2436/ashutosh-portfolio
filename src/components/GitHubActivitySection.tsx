"use client";

import { motion } from "framer-motion";
import { GitBranch, GitCommit, GitPullRequest } from "lucide-react";

const RECENT_COMMITS = [
    { id: '8f2a1', type: 'commit', msg: 'Optimize AES256 encryption streaming buffers', time: '2h ago' },
    { id: '4d1e2', type: 'pr', msg: 'Merge: ML Inference Quantization Pipeline', time: '1d ago' },
    { id: '2c9b3', type: 'branch', msg: 'feat: add shadow-deployment monitoring', time: '2d ago' },
    { id: '1a5d4', type: 'commit', msg: 'Refactor: PostgreSQL Read-Replica Routing', time: '4d ago' },
    { id: '9e7f5', type: 'commit', msg: 'Fix: Z-score outlier detection heuristic', time: '1w ago' },
];

export function GitHubActivitySection() {
    return (
        <section className="mt-48 pb-24">
            <div className="flex items-center gap-6 mb-16 px-2">
                <h2 className="text-2xl font-sans font-bold tracking-tight text-white uppercase">Operational Log</h2>
                <div className="h-[1px] flex-grow bg-border" />
            </div>

            <div className="minimal-card p-10 rounded-sm font-mono relative overflow-hidden">
                <div className="space-y-6">
                    {RECENT_COMMITS.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-6 text-xs group"
                        >
                            <div className="mt-1 text-slate-600 group-hover:text-white transition-colors">
                                {item.type === 'commit' && <GitCommit size={14} />}
                                {item.type === 'pr' && <GitPullRequest size={14} />}
                                {item.type === 'branch' && <GitBranch size={14} />}
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between gap-6 mb-1">
                                    <span className="text-slate-300 group-hover:text-white transition-colors tracking-tight font-sans text-[13px]">
                                        {item.msg}
                                    </span>
                                    <span className="text-slate-600 whitespace-nowrap text-[10px] uppercase tracking-widest">{item.time}</span>
                                </div>
                                <div className="text-[10px] text-slate-700 tracking-widest">
                                    ID: {item.id} — Ashutosh2436 / CORE-SYSTEMS
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Heatmap */}
                <div className="mt-16 pt-12 border-t border-white/5 overflow-x-auto">
                    <div className="flex gap-1.5 min-w-max">
                        {Array.from({ length: 48 }).map((_, i) => (
                            <div key={i} className="flex flex-col gap-1.5">
                                {Array.from({ length: 7 }).map((_, j) => {
                                    const val = (i * 7 + j) % 13;
                                    const level = val > 10 ? 2 : (val > 7 ? 1 : 0);
                                    return (
                                        <div
                                            key={j}
                                            className={`w-2.5 h-2.5 rounded-[1px] ${level === 2 ? 'bg-slate-300' :
                                                    level === 1 ? 'bg-slate-700' :
                                                        'bg-white/[0.03]'
                                                }`}
                                        />
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 text-[10px] text-slate-700 flex justify-between uppercase tracking-widest">
                        <span>Activity Stream 2025-2026</span>
                        <span>External-Git-Link</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
