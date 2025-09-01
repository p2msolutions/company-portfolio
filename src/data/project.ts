export const projects = [
  {
    id: 1,
    slug: "ai-powered-analytics-platform",
    title: "AI-Powered Analytics Platform",
    description:
      "Built a comprehensive analytics dashboard with ML-powered insights and real-time data processing.",
    image: "https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "Python", "TensorFlow", "AWS"],
    category: "AI/ML",
    github: "https://github.com/yourusername/ai-analytics-platform",
    live: "https://ai-analytics-platform.vercel.app",
    problemsSolved: [
      "Real-time stream processing at scale",
      "Predictive analytics for churn and LTV",
      "Cost optimization across AWS services"
    ],
    caseStudy: {
      overview: `
        Our client needed a scalable analytics solution to process millions of events per day 
        from applications, CRMs, and marketing platforms. The existing BI tools could only 
        handle batch data with multi-hour delays, making real-time decision making impossible. 
        We built a unified AI-powered analytics platform that combines batch and streaming data, 
        leverages ML models for churn/LTV prediction, and delivers insights through an 
        interactive React dashboard.`,
      objectives: [
        "Provide <60s latency dashboards for decision-making.",
        "Enable predictive analytics with explainable ML insights.",
        "Optimize cloud infrastructure costs while ensuring scalability."
      ],
      architecture: `
        The system used React for dashboards and visualizations. APIs and model serving 
        were built in Python (FastAPI). TensorFlow pipelines handled feature engineering 
        and model retraining. AWS Kinesis ingested real-time streams, processed with Lambda, 
        and stored in S3 and RDS. Athena supported ad-hoc queries. ECS/Fargate managed 
        containerized services, with autoscaling enabled.`,
      challenges: [
        {
          problem: "Handling high-velocity ingestion from multiple sources.",
          solution: "Implemented Kinesis streams with Lambda consumers and compact binary payloads, reducing message size by ~28%."
        },
        {
          problem: "Model drift and lack of interpretability.",
          solution: "Automated weekly retraining, drift detection metrics, and SHAP-based explanations integrated into the dashboard."
        },
        {
          problem: "Visualization lag with large data ranges.",
          solution: "Pre-aggregated metrics and client-side virtualization reduced query latency from 10s → <1.5s."
        }
      ],
      impact: [
        "42% faster decision cycles with near real-time KPIs.",
        "30% AWS cost savings via autoscaling and spot usage.",
        "15% churn reduction from ML-driven retention campaigns."
      ],
      technicalHighlights: `// Example: Batched inference endpoint (FastAPI)
@app.post("/inference")
def predict(batch: List[Event]):
    X = featurize(batch)
    y, expl = model.predict_with_explanations(X)
    return {"predictions": y.tolist(), "shap_values": expl.tolist()}`,
      links: {
        github: "https://github.com/yourusername/ai-analytics-platform",
        live: "https://ai-analytics-platform.vercel.app"
      }
    }
  },
  {
    id: 2,
    slug: "ecommerce-automation-suite",
    title: "E-commerce Automation Suite",
    description:
      "Developed a complete automation system for inventory management, order processing, and customer analytics.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    category: "Automation",
    github: "https://github.com/yourusername/ecommerce-automation",
    live: "https://ecommerce-automation-suite.vercel.app",
    problemsSolved: [
      "Manual operations overhead in fulfillment",
      "Inventory inaccuracies across sales channels",
      "Slow dashboards during peak traffic"
    ],
    caseStudy: {
      overview: `
        Large e-commerce sellers often face errors in stock reconciliation, 
        delayed order processing, and unreliable dashboards during mega sales. 
        Our client’s operations team was spending hours daily on manual workflows. 
        We built an automation suite that unified inventory, orders, invoicing, 
        and customer analytics into a single system, integrated with marketplaces 
        and ERP software.`,
      objectives: [
        "Cut manual effort by 80% for operations teams.",
        "Keep multi-channel inventory accurate in real-time.",
        "Deliver dashboards with <200ms query times at peak sales."
      ],
      architecture: `
        Next.js was used for the admin portal, with SSR/ISR for fast performance. 
        Node.js handled services with RabbitMQ for workflows. PostgreSQL acted as 
        the source of truth, while Redis managed caching, background jobs, and 
        rate-limited queues. Webhooks synchronized order data from external marketplaces.`,
      challenges: [
        {
          problem: "Webhook storms during flash sales.",
          solution: "Debounced event consumers with Redis streams and idempotency checks."
        },
        {
          problem: "Inventory drift across multiple channels.",
          solution: "Reconciliation jobs and compensation transactions ensured 99.3% stock accuracy."
        },
        {
          problem: "Slow dashboards during peak traffic.",
          solution: "Materialized views, async refresh, and Redis TTL caching reduced P95 latency to <180ms."
        }
      ],
      impact: [
        "Order processing time reduced from minutes → <10s.",
        "Stock accuracy improved to 99.3% across channels.",
        "Peak dashboards consistently <180ms response time."
      ],
      technicalHighlights: `// Example: Redis-backed task queue
const task = { orderId: "123", type: "INVOICE_GENERATE" };
await redis.xadd("task-queue", "*", "payload", JSON.stringify(task));`,
      links: {
        github: "https://github.com/yourusername/ecommerce-automation",
        live: "https://ecommerce-automation-suite.vercel.app"
      }
    }
  },
  {
    id: 3,
    slug: "cloud-native-microservices",
    title: "Cloud-Native Microservices",
    description:
      "Architected and deployed scalable microservices infrastructure with Kubernetes orchestration.",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Docker", "Kubernetes", "Go", "MongoDB"],
    category: "Cloud",
    github: "https://github.com/yourusername/cloud-microservices",
    live: "https://cloud-microservices-demo.com",
    problemsSolved: [
      "Monolith bottlenecks and downtime",
      "Slow and risky deployments",
      "Limited scalability under heavy load"
    ],
    caseStudy: {
      overview: `
        A legacy monolithic application was slowing down feature releases, 
        suffering from frequent downtime, and unable to scale for peak traffic. 
        We re-architected the system into cloud-native microservices with 
        Kubernetes orchestration, enabling independent deployability and 
        fault isolation.`,
      objectives: [
        "Break the monolith into modular microservices.",
        "Enable zero-downtime deployments and faster rollbacks.",
        "Achieve 99.95% uptime with elastic scaling."
      ],
      architecture: `
        Services were implemented in Go using gRPC and HTTP APIs. 
        Each service had its own database (MongoDB or Postgres). 
        Kubernetes (EKS) handled orchestration, Istio provided service mesh, 
        Prometheus + Grafana handled observability, and ELK stack powered logging.`,
      challenges: [
        {
          problem: "Downtime during deployments.",
          solution: "Introduced blue/green and canary deploys via Argo Rollouts with instant rollback."
        },
        {
          problem: "Unpredictable latency under high load.",
          solution: "Implemented circuit breaking and request hedging, reducing latency by 35%."
        },
        {
          problem: "Security and compliance requirements.",
          solution: "mTLS between services, OPA/Gatekeeper policies, signed images, and secrets via AWS KMS."
        }
      ],
      impact: [
        "99.95% uptime achieved across environments.",
        "Deployment time reduced from 30 mins → 5 mins.",
        "Latency improved by 35% under peak load."
      ],
      technicalHighlights: `# Example: HorizontalPodAutoscaler (K8s)
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
spec:
  minReplicas: 3
  maxReplicas: 20
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 65`,
      links: {
        github: "https://github.com/yourusername/cloud-microservices",
        live: "https://cloud-microservices-demo.com"
      }
    }
  },
  {
    id: 4,
    slug: "real-time-collaboration-app",
    title: "Real-time Collaboration App",
    description:
      "Created a collaborative workspace with real-time editing, video calls, and project management features.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "Socket.io", "WebRTC", "Firebase"],
    category: "Web App",
    github: "https://github.com/yourusername/collaboration-app",
    live: "https://collaboration-app-demo.vercel.app",
    problemsSolved: [
      "Realtime editing conflicts",
      "High-latency video in low bandwidth",
      "Complex access control requirements"
    ],
    caseStudy: {
      overview: `
        Remote teams struggled with fragmented tools for document editing, 
        video calls, task management, and chat. We built a unified real-time 
        collaboration app that integrates all these features in one place. 
        The system emphasizes low-latency editing, resilient offline-first 
        workflows, and secure role-based access.`,
      objectives: [
        "Enable conflict-free collaborative editing.",
        "Deliver reliable video calls in low-bandwidth environments.",
        "Provide enterprise-grade access control and audit logging."
      ],
      architecture: `
        React powered the front-end with CRDT-based text editing. 
        Realtime sync used Socket.io. Video calls leveraged WebRTC with 
        STUN/TURN for fallback. Firebase handled authentication and presence. 
        Task management and chat were implemented on the same realtime backbone.`,
      challenges: [
        {
          problem: "Concurrent editing conflicts.",
          solution: "Implemented CRDT-based text model with optimistic UI and reconciliation after reconnects."
        },
        {
          problem: "Poor video quality in constrained networks.",
          solution: "Adaptive bitrate streaming (VP9 SVC) with auto-mute on high packet loss reduced buffering by 20%."
        },
        {
          problem: "Complex role-based permissions.",
          solution: "Document-level ACLs, short-lived tokens, and encrypted storage with full audit logs."
        }
      ],
      impact: [
        "Typing latency P95 <120ms across regions.",
        "Video join time <2s with smoother playback.",
        "Offline editing recovered without data loss."
      ],
      technicalHighlights: `// Example: Realtime presence payload
{
  "docId": "abc123",
  "userId": "u42",
  "cursor": {"line": 10, "ch": 5},
  "selection": {"from": 100, "to": 120},
  "ts": 1725100000
}`,
      links: {
        github: "https://github.com/yourusername/collaboration-app",
        live: "https://collaboration-app-demo.vercel.app"
      }
    }
  }
];
