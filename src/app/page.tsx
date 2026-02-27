"use client";

import { ArchitecturePillar } from "@/components/ArchitecturePillar";
import { ProjectCaseStudy } from "@/components/ProjectCaseStudy";
import { TechStackSection } from "@/components/TechStackSection";
import { GitHubActivitySection } from "@/components/GitHubActivitySection";
import { BlogSection } from "@/components/BlogSection";
import { ContactSection } from "@/components/ContactSection";
import { Server, Shield, Zap, Layers, Cpu } from "lucide-react";

const PILLARS = [
  {
    title: "Scalability & State",
    icon: <Server size={32} />,
    scenario: "Unexpected 10x surge in concurrent API requests.",
    failure: "Stateful session affinity causes node exhaustion while other instances sit idle.",
    mitigation: "Strict statelessness with distributed JWT/Redis sessions. Implementing horizontal pod autoscaling (HPA) targeting resource velocity.",
    exampleSnippet: "// Scaling Strategy\nservice.scale({\n  mode: 'stateless',\n  sync: 'redis-pubsub',\n  threshold: '0.85cpu'\n});"
  },
  {
    title: "Deep Security",
    icon: <Shield size={32} />,
    scenario: "Data breach attempt targeting sensitive PII in the DB layer.",
    failure: "Transparent Disk Encryption (TDE) is bypassed via application-layer SQL injection.",
    mitigation: "Application-level encryption (AES256-GCM) with enveloped keys. Data is encrypted before it ever touches the persistence layer.",
    exampleSnippet: "// Envelope Encryption\nconst cipher = encrypt(data, deek);\nconst securePackage = {\n  payload: cipher,\n  keyId: kms.wrap(deek)\n};"
  },
  {
    title: "Concurrency & Flow",
    icon: <Zap size={32} />,
    scenario: "High-volume transactional updates leading to race conditions.",
    failure: "Last-write-wins strategy causes data corruption in financial ledgers.",
    mitigation: "Optimistic concurrency control using versioned hashing and atomic write-ahead logs (WAL).",
    exampleSnippet: "// Atomic UpSert\nDB.update(id)\n  .set(payload)\n  .where('version', '==', lastSeen)\n  .increment('version');"
  },
  {
    title: "Clean Architecture",
    icon: <Layers size={32} />,
    scenario: "Migrating from monolith PostgreSQL to distributed NoSQL (MongoDB).",
    failure: "Business logic is tightly coupled to SQL schemas, requiring a 90% codebase rewrite.",
    mitigation: "Strict dependency inversion. Logic interacts with Interfaces/Ports, not Implementations/Adapters.",
    exampleSnippet: "// Dependency Inversion\nclass OrderService {\n  constructor(repo: IOrderRepo) {}\n  execute(id) => repo.findById(id);\n}"
  },
  {
    title: "ML Systems Ops",
    icon: <Cpu size={32} />,
    scenario: "Model performance degradation (drift) in production environment.",
    failure: "Silent failure as model accuracy drops below baseline without operational alerts.",
    mitigation: "Implementation of shadow-deployment and vector-drift monitoring pipelines with automated fallback to heuristic baseline.",
    exampleSnippet: "// ML Pipeline Guard\nif (driftScore > alpha) {\n  telemetry.alert();\n  router.fallback('heuristic_v1');\n}"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen max-w-6xl mx-auto px-6 py-32 relative z-10 selection:bg-accent selection:text-white">
      {/* Hero Section */}
      <section className="mb-48">
        <h1 className="text-6xl md:text-7xl font-sans font-bold tracking-tight mb-6 text-white uppercase">
          ASHUTOSH <br />
          AWASTHI
        </h1>
        <p className="text-xl text-slate-400 font-mono mb-6 tracking-tight">
          SOFTWARE DEVELOPER
        </p>
        <p className="text-2xl text-white font-sans mb-12 max-w-2xl leading-relaxed font-semibold">
          Designing secure, scalable backend systems and production-ready ML pipelines.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-[11px] font-mono text-slate-500 uppercase tracking-widest mb-16 border-t border-border pt-8">
          <div><span className="text-slate-400 block mb-1 font-semibold text-[9px]">Backend</span> Java, Spring Boot, Go</div>
          <div><span className="text-slate-400 block mb-1 font-semibold text-[9px]">ML Systems</span> Python</div>
          <div><span className="text-slate-400 block mb-1 font-semibold text-[9px]">Systems & Performance</span> C++</div>
          <div><span className="text-slate-400 block mb-1 font-semibold text-[9px]">Infrastructure</span> Docker</div>
        </div>

        <div className="flex flex-wrap gap-6">
          <button
            onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-black px-10 py-4 font-sans font-bold hover:bg-slate-200 transition-all rounded-sm uppercase text-sm tracking-wide"
          >
            VIEW PROJECTS
          </button>
          <button className="border border-border px-10 py-4 font-sans font-bold hover:bg-white/5 transition-all rounded-sm uppercase text-sm tracking-wide">
            DOWNLOAD RESUME
          </button>
        </div>
      </section>

      {/* Architecture Thinking Section */}
      <section className="mb-48">
        <div className="flex items-center gap-6 mb-16 px-2">
          <h2 className="text-2xl font-sans font-bold tracking-tight text-white uppercase">Architecture Philosophy</h2>
          <div className="h-[1px] flex-grow bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PILLARS.map((pillar) => (
            <ArchitecturePillar key={pillar.title} {...pillar} />
          ))}
        </div>
      </section>

      {/* Project Case Studies */}
      <section id="case-studies" className="mt-40">
        <div className="flex items-center gap-6 mb-20">
          <h2 className="text-2xl font-sans font-bold tracking-tight text-white uppercase px-2">Selected Case Studies</h2>
          <div className="h-[1px] flex-grow bg-border" />
        </div>

        <ProjectCaseStudy
          title="AI_FILE_WIZARD"
          context="Handling sensitive enterprise data requires more than just cloud storage; it requires localized control over data integrity, privacy, and compression to reduce ingress/egress costs."
          architecture="FileBuffer -> SHA256 (Integrity) -> Stream-AES256-GCM (Cipher) -> 7z (Compression) -> Multimodal_LLM (Metadata Extraction)"
          decisions={[
            {
              point: "Streaming AES vs. Bulk Encryption",
              reasoning: "Implemented chunk-based streaming to handle files > RAM capacity without OOM (Out of Memory) kills. Uses GCM mode for authenticated encryption at the block level."
            },
            {
              point: "Late-stage Compression",
              reasoning: "7z compression is performed post-encryption. Given that encrypted data has high entropy (looks like random noise), compression becomes less efficient, but necessary to manage storage volumes for metadata."
            }
          ]}
          failures={[
            {
              scenario: "Memory pressure on concurrent multi-file uploads.",
              mitigation: "Introduced a semaphore-gated worker pool to limit concurrent encryption threads to N-1 vCPUs."
            },
            {
              scenario: "Ciphertext manipulation via bit-flipping on disk.",
              mitigation: "Utilized GCM (Galois/Counter Mode) tags to verify integrity during the decryption stream, failing early on hash mismatch."
            }
          ]}
          performance="Sub-200ms latency for initial hashing. Buffer-tuning at 64KB chunks to optimize the disk-IO-to-CPU-cycles ratio."
          security="Zero-knowledge architecture; decryption keys never persisted alongside ciphertext. AES-GCM tags provide tamper-evidence."
          evolution="Migrating to a distributed worker architecture where encryption nodes can be scaled independently of the metadata extraction API. Planning WebAssembly (WASM) implementation for client-side encryption."
        />

        <ProjectCaseStudy
          title="STOCK_ML_DASHBOARD"
          context="Financial data streams are high-volume, noisy, and non-stationary. A simple model is insufficient; a system is required to handle data drift and inference latency."
          architecture="REST_Poll -> InfluxDB/TimeSeries -> Sklearn_Pipeline -> Model_Inference_Service -> React_Visualization"
          decisions={[
            {
              point: "Offline Training vs. Online Inference",
              reasoning: "Decoupled the training pipeline from the serving layer. Models are serialized as Protobuf/Onnx for fast, low-overhead inference in the serving container."
            },
            {
              point: "Quantization of Regressor",
              reasoning: "Utilized FP16 quantization to reduce the model footprint and increase cache locality during multi-symbol concurrent inference."
            }
          ]}
          failures={[
            {
              scenario: "Drastic market volatility causing model output divergence.",
              mitigation: "Implemented a 'Z-score' outlier detector on input features. If data falls outside 3 sigma, the system switches to a moving-average heuristic and alerts for retrain."
            }
          ]}
          performance="95th percentile inference latency at <45ms. InfluxDB optimized with retention policies for high-speed rolling window calculations."
          security="Strict OAuth2 protection for model-serving endpoints to prevent competitive data extraction (scraping)."
          evolution="Transitioning to a Lambda architecture to handle real-time ticker streams via Kafka/Spark Streaming, moving away from polling-based data ingestion."
        />

        <ProjectCaseStudy
          title="HOLIFEST_ECOMMERCE"
          context="A full-stack Holi festival e-commerce platform with a real cloud backend. Built with Node.js, Express, MongoDB, and React — fully deployed on Vercel with JWT auth, admin panel, and live product catalog."
          architecture="React_Frontend (Vercel) -> Axios -> Node/Express_API (Vercel) -> MongoDB_Atlas (Cloud)"
          decisions={[
            {
              point: "Serverless Backend on Vercel",
              reasoning: "Deployed the Express backend as a Vercel Serverless Function, allowing zero-server-management with automatic scaling under traffic spikes."
            },
            {
              point: "MongoDB Atlas for Persistence",
              reasoning: "Using a managed cloud database (Atlas M0) means zero-downtime, automatic backups, and geo-distributed reads without managing infrastructure."
            }
          ]}
          failures={[
            {
              scenario: "Frontend hitting a local backend during cloud deployment.",
              mitigation: "Moved the API base URL to a Vite environment variable (VITE_API_URL), allowing the build pipeline to inject the correct Vercel URL at deploy-time."
            }
          ]}
          performance="Cold-start serverless latency < 800ms. Static frontend assets cached via Vercel's global Edge CDN for sub-50ms TTFB."
          security="JWT-based stateless auth with role-based access control (ADMIN / USER). Passwords hashed with bcrypt. CORS restricted to the frontend origin."
          evolution="Migrating product images to Cloudinary CDN for optimized delivery. Planning Stripe payment gateway integration for real transactions."
          githubUrl="https://github.com/Ashutosh2436/holi-frontend"
          liveUrl="https://frontend-pi-tan-28.vercel.app"
        />
      </section>

      <TechStackSection />

      <GitHubActivitySection />

      <BlogSection />

      <ContactSection />

      {/* Footer */}
      <footer className="mt-48 pt-12 border-t border-border flex justify-between items-center text-[10px] font-mono text-slate-600 uppercase tracking-widest">
        <div>© 2026 Ashutosh Awasthi</div>
        <div className="flex gap-8">
          <span>Production Ready</span>
          <span>99.9% Reliable</span>
        </div>
      </footer>
    </main>
  );
}
