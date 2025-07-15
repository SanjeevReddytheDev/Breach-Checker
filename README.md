# 🔐 BreachChecker – Email Breach Detection App

**BreachChecker** is a simple Node.js cybersecurity app that simulates email breach detection.  
It allows users to check if an email address has appeared in known data breaches.

This project is designed to be **CI/CD ready** using **AWS CodePipeline, CodeBuild, and CodeDeploy**.

---

## 🚀 Features

- ✅ Input any email and check against a local breach database
- ❌ Warns if the email was found in a known breach
- 🔒 Shows safe message if no breach found
- 📂 Designed for AWS deployment (EC2)
- 🔄 Fully compatible with AWS CodePipeline (CI/CD)

---

## 🧠 Tech Stack

- **Node.js + Express**
- **EJS** for simple templating
- **JSON** file for simulating breach data
- **Shell scripts** for AWS deployment lifecycle
- AWS CodePipeline + CodeBuild + CodeDeploy (CI/CD ready)

---

## 📂 Project Structure




---

## ⚙️ How to Use Locally

1. **Clone the repo:**
   ```bash
   git clone https://github.com/SanjeevReddytheDev/breach-checker.git
   cd breach-checker

#Install Dependencies 

npm install


## To Run the app 
node app.js


## Open ur browser and visit : "http://localhost:3000"


☁️ AWS CI/CD Deployment
This app is tested for full deployment with:

AWS CodePipeline

AWS CodeBuild

AWS CodeDeploy

EC2 (Amazon Linux 2 or Ubuntu)

CI/CD Steps:

Push code to GitHub

Pipeline builds the app using buildspec.yml

Deploys to EC2 using appspec.yml + shell scripts

✅ Sample Output
makefile
Copy code
Email: test@hacked.com
Status: ❌ Found in 3 breaches
Suggestion: Use 2FA, change password immediately
🛡️ Future Plans
🔗 Integration with HaveIBeenPwned API

📝 Breach logging with MongoDB

📱 Telegram alerts for breached emails

🧠 Add rate-limiting + simple CAPTCHA

🧑‍💻 Author
Sanjeev Reddy
B.Tech CSE (Cybersecurity) @ LPU
Aspiring Cybersecurity Engineer | SOC Analyst | Cloud Security Enthusiast
GitHub


