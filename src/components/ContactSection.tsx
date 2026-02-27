"use client";

import { Mail, Linkedin, Github, Send } from "lucide-react";

export function ContactSection() {
    return (
        <section className="mt-48 mb-32">
            <div className="flex items-center gap-6 mb-16 px-2">
                <h2 className="text-2xl font-sans font-bold tracking-tight text-white uppercase">Contact</h2>
                <div className="h-[1px] flex-grow bg-border" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 px-2 text-white">
                <div>
                    <p className="text-slate-400 font-sans text-lg mb-12 leading-relaxed">
                        I am currently open to high-impact roles in Backend Systems, ML Infrastructure, and Systems Engineering.
                    </p>

                    <div className="space-y-6">
                        <a href="mailto:ashutoshawasthi2002@gmail.com" className="flex items-center gap-6 group">
                            <div className="w-12 h-12 rounded-sm border border-border flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                <Mail size={20} />
                            </div>
                            <div>
                                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-1">Email</span>
                                <span className="text-sm border-b border-transparent group-hover:border-white transition-all">ashutoshawasthi2002@gmail.com</span>
                            </div>
                        </a>

                        <a href="https://linkedin.com/in/ashutosh-awasthi-a1a904271/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                            <div className="w-12 h-12 rounded-sm border border-border flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                <Linkedin size={20} />
                            </div>
                            <div>
                                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-1">LinkedIn</span>
                                <span className="text-sm border-b border-transparent group-hover:border-white transition-all">ashutosh-awasthi-a1a904271</span>
                            </div>
                        </a>

                        <a href="https://github.com/Ashutosh2436" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                            <div className="w-12 h-12 rounded-sm border border-border flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                <Github size={20} />
                            </div>
                            <div>
                                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-1">GitHub</span>
                                <span className="text-sm border-b border-transparent group-hover:border-white transition-all">Ashutosh2436</span>
                            </div>
                        </a>
                    </div>
                </div>

                <ContactForm />
            </div>
        </section>
    );
}

function ContactForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
        const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
        const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields before sending.");
            return;
        }

        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`From: ${name}\nReply-to: ${email}\n\n${message}`);
        const gmailUrl = `https://mail.google.com/mail/?view=cm&to=ashutoshawasthi2002@gmail.com&su=${subject}&body=${body}`;
        window.open(gmailUrl, "_blank");
    };

    return (
        <div className="p-10 minimal-card rounded-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label className="text-[10px] font-mono text-slate-500 block mb-3 uppercase tracking-widest">Identity</label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Name / Organization"
                        className="w-full bg-transparent border-b border-border py-4 text-sm font-sans text-white focus:border-white focus:outline-none transition-all placeholder:text-slate-700"
                    />
                </div>
                <div>
                    <label className="text-[10px] font-mono text-slate-500 block mb-3 uppercase tracking-widest">Return Address</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="email@example.com"
                        className="w-full bg-transparent border-b border-border py-4 text-sm font-sans text-white focus:border-white focus:outline-none transition-all placeholder:text-slate-700"
                    />
                </div>
                <div>
                    <label className="text-[10px] font-mono text-slate-500 block mb-3 uppercase tracking-widest">Inquiry Payload</label>
                    <textarea
                        name="message"
                        rows={4}
                        placeholder="Summarize your connection objective..."
                        className="w-full bg-transparent border-b border-border py-4 text-sm font-sans text-white focus:border-white focus:outline-none transition-all placeholder:text-slate-700 resize-none"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-white text-black font-sans font-bold py-5 px-8 rounded-sm hover:bg-slate-200 transition-all flex items-center justify-center gap-3 group uppercase text-sm tracking-wide mt-8"
                >
                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                    Send Message
                </button>
                <p className="text-[10px] font-mono text-slate-600 text-center tracking-widest uppercase mt-2">
                    Opens Gmail with your message pre-filled
                </p>
            </form>
        </div>
    );
}
