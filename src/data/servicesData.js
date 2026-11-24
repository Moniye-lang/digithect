export const services = [
  {
    id: "cloud-architecture",
    title: "Enterprise Cloud & Distributed Systems",
    subtitle: "High-Throughput, Fault-Tolerant Foundations",
    shortDesc: "Architecting resilient, self-healing multi-cloud environments engineered to sustain millions of concurrent transactions with 99.999% availability.",
    icon: "CloudCog",
    tags: ["Kubernetes", "AWS / GCP / Azure", "Microservices", "Event-Driven", "Terraform"],
    metrics: { uptime: "99.999%", latency: "<15ms", scale: "10M+ RPS" },
    features: [
      "Zero-downtime blue/green deployment pipelines",
      "Dynamic load balancing and automated geo-routing",
      "Infrastructure-as-Code (IaC) with immutable state management",
      "Real-time observability, tracing, and predictive anomaly triage"
    ],
    accentColor: "from-amber-400 via-gold-400 to-yellow-600"
  },
  {
    id: "ai-engineering",
    title: "Bespoke AI & Agentic Platforms",
    subtitle: "Proprietary Intelligence Integrated Directly into Workflow",
    shortDesc: "Developing custom neural networks, enterprise RAG pipelines, fine-tuned domain LLMs, and autonomous AI agents designed with privacy-first boundaries.",
    icon: "Cpu",
    tags: ["Autonomous Agents", "Custom LLM Fine-Tuning", "Vector DBs", "PyTorch", "Model Hardening"],
    metrics: { accuracy: "99.4%", processing: "4x Faster", compliance: "SOC2-Compliant" },
    features: [
      "Air-gapped private LLM architectures for high-security sectors",
      "Multi-agent reasoning loops with deterministic verification gates",
      "High-scale semantic search & sub-second vector embedding lookups",
      "Real-time continuous model distillation & drift mitigation"
    ],
    accentColor: "from-gold-300 via-amber-400 to-gold-600"
  },
  {
    id: "fintech-security",
    title: "Fintech, Web3 & Mission-Critical Systems",
    subtitle: "Sub-Millisecond Execution & Cryptographic Assurance",
    shortDesc: "Engineering high-frequency transaction engines, ledger security, zero-knowledge validation systems, and bank-grade payment architectures.",
    icon: "ShieldCheck",
    tags: ["Low-Latency Core", "PCI-DSS Level 1", "ZKP & Cryptography", "ISO 27001", "Order Matching"],
    metrics: { execution: "< 0.8ms", security: "Bank Grade", volume: "$10B+ Processed" },
    features: [
      "Hardware-accelerated cryptographic signing & verification",
      "Real-time algorithmic fraud prevention and AML surveillance",
      "Deterministic state machines with instant rollback capabilities",
      "Rigorous formal verification against race conditions & exploits"
    ],
    accentColor: "from-yellow-300 via-gold-500 to-amber-700"
  },
  {
    id: "legacy-modernization",
    title: "Legacy De-Monolithing & Core Transformation",
    subtitle: "Modernize Core Systems Without Ever Halting Production",
    shortDesc: "Transforming legacy mainframes and monolithic codebases into modular, event-driven reactive architectures with zero data loss or operational interruptions.",
    icon: "Layers",
    tags: ["Strangler Fig Pattern", "Event Streaming", "Kafka", "Data Migration", "Zero Downtime"],
    metrics: { downtime: "0 Hours", speedup: "6.5x", techDebt: "-80%" },
    features: [
      "Strangler-fig migration strategies ensuring seamless parallel running",
      "Dual-write synchronization with continuous parity verification",
      "Containerization & micro-frontend decoupling",
      "Preservation of legacy business logic with modernized observability"
    ],
    accentColor: "from-amber-200 via-gold-400 to-yellow-700"
  },
  {
    id: "cybersecurity-zero-trust",
    title: "Zero-Trust Cybersecurity Architecture",
    subtitle: "Proactive Defense Built Deep into the Software Fabric",
    shortDesc: "Engineering defense-in-depth security architectures: automated threat modeling, penetration testing, cryptographic identity, and automated compliance.",
    icon: "Lock",
    tags: ["Zero-Trust", "mTLS", "Continuous Auth", "Penetration Testing", "Quantum-Resistant"],
    metrics: { breachIncidents: "0", compliance: "100%", auditPassed: "1st Attempt" },
    features: [
      "Micro-segmented network boundaries with ephemeral secrets",
      "Mutual TLS (mTLS) between all microservices and edge gateways",
      "Automated dynamic application security testing (DAST) in CI/CD",
      "Post-quantum cryptographic key exchange readiness"
    ],
    accentColor: "from-yellow-400 via-gold-500 to-amber-800"
  },
  {
    id: "design-engineering",
    title: "High-Frequency UX & Design Engineering",
    subtitle: "Executive Glassmorphism & Flawless Interaction Speed",
    shortDesc: "Translating sophisticated brand visions into pixel-perfect, 120 FPS web and mobile applications with bespoke micro-interactions and elite typography.",
    icon: "Sparkles",
    tags: ["Design Systems", "Framer Motion", "Tailwind CSS", "120 FPS", "A11y Compliant"],
    metrics: { lighthouse: "100/100", fps: "120 FPS", conversion: "+48%" },
    features: [
      "Custom WebGL / Canvas / SVG accelerated interactive visualizations",
      "Modular design tokens powering unified cross-platform interfaces",
      "Zero-jank animations running entirely on GPU compositor threads",
      "Comprehensive accessibility (WCAG 2.1 AAA) compliance"
    ],
    accentColor: "from-gold-400 via-amber-300 to-yellow-500"
  }
];

export const blueprintPhases = [
  {
    phase: "01",
    name: "Architectural Audit & Blueprint Discovery",
    desc: "We perform a forensic diagnostic of your technical topography, mapping bottlenecks, architectural debt, data flows, and concurrency limits.",
    deliverables: ["Topographical System Map", "Latency & Concurrency Audit", "Architectural Blueprint RFC", "Risk Mitigation Matrix"]
  },
  {
    phase: "02",
    name: "Modular Domain Modeling & System Design",
    desc: "Crafting the decoupled domain architecture with strict boundary contracts, event models, schema definitions, and cloud topologies.",
    deliverables: ["Domain-Driven Design Specs", "API Contract Protocols", "Zero-Trust Security Schema", "Scalability Threshold Benchmarks"]
  },
  {
    phase: "03",
    name: "Precision Engineering & Continuous Hardening",
    desc: "Elite engineering sprints constructing the core engines with comprehensive unit, integration, fuzzing, and load simulations.",
    deliverables: ["Clean Architecture Codebase", "Automated CI/CD Pipeline", "Chaos Engineering Suite", "Formal Parity Tests"]
  },
  {
    phase: "04",
    name: "Autonomous Scale & Executive Handover",
    desc: "Deployment through progressive canary rollouts, live telemetry calibration, internal team upskilling, and architectural warranty.",
    deliverables: ["Zero-Downtime Rollout", "Live APM Dashboards", "Architecture Runbooks", "24/7 SLA Engineering Support"]
  }
];

export const techStackMatrix = {
  backend: [
    { name: "Go / Golang", role: "Ultra-fast distributed microservices & networking" },
    { name: "Rust", role: "Memory-safe systems programming & low-latency engines" },
    { name: "Node.js / TypeScript", role: "Event-driven asynchronous APIs & orchestrators" },
    { name: "Python", role: "High-performance AI pipelines & neural model training" },
    { name: "Java / Spring Boot", role: "Hardened enterprise core banking & transaction layers" }
  ],
  cloud: [
    { name: "Kubernetes & Docker", role: "Container orchestration & resilient cluster scaling" },
    { name: "Terraform & Pulumi", role: "Deterministic Infrastructure as Code" },
    { name: "AWS / Google Cloud", role: "Multi-region cloud infrastructure & edge computing" },
    { name: "Apache Kafka", role: "Sub-millisecond event streaming & message brokerage" },
    { name: "PostgreSQL & Redis", role: "ACID compliance paired with distributed caching" }
  ],
  ai: [
    { name: "PyTorch & TensorRT", role: "Deep learning models & GPU-accelerated inference" },
    { name: "LangChain & LlamaIndex", role: "Autonomous agent reasoning & contextual retrieval" },
    { name: "Qdrant / Milvus / Pinecone", role: "High-dimensional vector similarity indexing" },
    { name: "Ollama / vLLM", role: "Private on-premise LLM serving & quantization" }
  ],
  security: [
    { name: "HashiCorp Vault", role: "Dynamic secret rotation & identity management" },
    { name: "Envoy & Istio", role: "Service mesh with zero-trust mTLS encryption" },
    { name: "OpenID Connect & OAuth2", role: "Cryptographic multi-tenant identity federation" },
    { name: "WAF & DDoS Mitigation", role: "Autonomous edge perimeter threat neutralization" }
  ]
};

export const clientMetrics = [
  { value: "99.999%", label: "Uptime SLA Engineered", detail: "Across all production client deployments" },
  { value: "< 12ms", label: "P99 Response Latency", detail: "Optimized distributed service calls" },
  { value: "$500M+", label: "Transaction Volume Handled", detail: "Securely processed with zero breaches" },
  { value: "140+", label: "Enterprise Architectures Deployed", detail: "Fintech, AI, Healthcare, Defense" }
];

