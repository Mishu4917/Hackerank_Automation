# 🤖 HackerRank Auto Solver - Puppeteer

A Node.js + Puppeteer automation script that *logs into HackerRank, navigates to the **Algorithms → Warmup* section, and *auto-solves multiple coding challenges* using pre-defined solutions from a codes.js file.

---

## 🚀 Features
- *Automatic Login* – Enters email & password securely.
- *Navigation* – Opens Algorithms → Warmup section.
- *Multi-Question Solver* – Solves all available questions sequentially.
- *Smart Editor Handling* – Copies code to HackerRank editor, selects, pastes & runs it.
- *Configurable* – Easily change login credentials & answers.
- *Non-Headless Mode* – See the browser actions in real time.

---

## 📂 Project Structure
📦 HackerRank-Auto-Solver
┣ 📜 index.js # Main Puppeteer script
┣ 📜 codes.js # Contains problem solutions
┣ 📜 package.json
┣ 📜 README.md
┗ 📜 .gitignore

javascript
Copy
Edit

*codes.js Example*
```javascript
module.exports = {
    answers: [
        `function processData(input) { 
            // Your warmup solution 1 here
        }`,
        `function processData(input) { 
            // Your warmup solution 2 here
        }`
    ]
};
🛠 Installation
Clone the repository

bash
Copy
Edit
git clone https://github.com/yourusername/hackerrank-auto-solver.git
cd hackerrank-auto-solver
Install dependencies

bash
Copy
Edit
npm install puppeteer
Add your credentials

Open index.js and update:

javascript
Copy
Edit
const email = 'your-email@example.com';
const password = 'your-password';
Add your solutions

Edit codes.js and add your challenge answers in the answers array in order.

▶ Usage
Run the script with:

bash
Copy
Edit
node index.js
The browser will:

Open HackerRank login page

Sign in with your credentials

Navigate to Algorithms → Warmup

Solve all challenges sequentially

Submit each solution automatically

⚠ Important Notes
Do NOT share your credentials publicly in GitHub.

Use .gitignore to exclude codes.js if it contains your solutions.

This script is for educational purposes and automation learning.

HackerRank UI updates might require selector changes.

📷 Demo
(Add a GIF or screenshot of the script solving problems)

📜 License
This project is licensed under the MIT License
