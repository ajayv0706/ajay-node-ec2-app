---

### 🔄 CI/CD Pipeline Flow

```mermaid
graph LR
    A[Developer Pushes Code] --> B[GitHub Repository]
    B --> C[GitHub Actions CI/CD Workflow]
    C -->|SSH| D[AWS EC2 Instance]
    D --> E[Git Pull Latest Code]
    E --> F[PM2 Restart App]
    F --> G[Live Application Updated 🚀]
