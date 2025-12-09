# 🚀 Node.js CI/CD Deployment to AWS EC2  
This project demonstrates how a Node.js application is automatically deployed to an AWS EC2 instance using **GitHub Actions CI/CD**, **PM2**, and **NGINX reverse proxy**.

When new code is pushed to the `main` branch → deployment triggers automatically → application restarts live on server with zero manual steps.

---

## 🔥 Features  
| Feature | Description |
|--------|-------------|
| CI/CD Pipeline | Automated deployment using GitHub Actions |
| Reverse Proxy | NGINX forwards domain traffic → Node.js app |
| Process Monitoring | PM2 keeps app alive & restarts on failure |
| Zero-Downtime Deploy | Code updates deploy instantly on push |
| Scalable Setup | Ready for production + load balancing |

---

## 🛠 Tech Stack
- Node.js / Express.js  
- AWS EC2 (Ubuntu 22.04)  
- GitHub Actions (CI/CD Pipeline)  
- NGINX Reverse Proxy  
- PM2 Process Manager  
- SSH Deployment Automation  

---

## 📂 Project Structure
