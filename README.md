
# 🚀 Node.js CI/CD Deployment to AWS EC2 (GitHub Actions + PM2 + NGINX)

This project demonstrates **full CI/CD automation** — where every code push to GitHub automatically deploys to an **AWS EC2 instance** with zero manual steps.

A complete production-ready pipeline using:

| Tool | Purpose |
|------|----------|
| **GitHub Actions** | CI/CD pipeline triggered on `git push` |
| **SSH Deploy Script** | Connects EC2 + pulls latest code |
| **PM2** | Keeps Node app running forever |
| **NGINX Reverse Proxy** | Maps domain → port 3000 |
| **EC2 Ubuntu Instance** | Live server hosting the application |

---

## 🔥 CI/CD Pipeline Flow

```mermaid
flowchart LR
A[Developer Pushes Code] --> B[GitHub Repository]
B --> C[GitHub Actions CI/CD Workflow]
C -->|SSH| D[AWS EC2 Instance]
D --> E[Git Pull Latest Code]
E --> F[PM2 Restart App]
F --> G[Live Auto-Updated Deployment 🚀]
