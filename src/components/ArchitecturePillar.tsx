"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PillarProps {
    title: string;
    icon: ReactNode;
    scenario: string;
    failure: string;
    mitigation: string;
    exampleSnippet: string;
}

export function ArchitecturePillar({ title, icon, scenario, failure, mitigation, exampleSnippet }: PillarProps) {
    return (
        <div className="minimal-card p-8 rounded-sm transition-all group">
            <div className="flex items-center gap-4 mb-8">
                <div className="text-slate-400 group-hover:text-white transition-colors duration-300">
                    {icon}
                </div>
                <h3 className="text-lg font-sans font-bold text-white uppercase tracking-tight">{title}</h3>
            </div>

            <div className="space-y-6">
                <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2">Scenario</span>
                    <p className="text-sm text-slate-300 font-sans leading-relaxed">{scenario}</p>
                </div>

                <div className="border-l border-red-900/40 pl-4 py-1">
                    <span className="text-[10px] font-mono text-red-500 uppercase tracking-widest block mb-2">Primary Failure</span>
                    <p className="text-sm text-slate-400 italic">"{failure}"</p>
                </div>

                <div>
                    <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest block mb-2">Mitigation Strategy</span>
                    <p className="text-sm text-slate-300 font-sans leading-relaxed">{mitigation}</p>
                </div>

                <div className="mt-8">
                    <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest block mb-3">Architectural Pattern</span>
                    <div className="bg-black p-4 rounded-sm border border-white/5 font-mono text-[11px] text-slate-400 leading-relaxed overflow-x-auto whitespace-pre group-hover:border-white/10 transition-colors">
                        {exampleSnippet}
                    </div>
                </div>
            </div>
        </div>
    );
}
