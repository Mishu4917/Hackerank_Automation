const puppeteer = require('puppeteer');
module.exports = {
    answers: [
        `function processData(input) {
            // Your solution code here
            console.log(input);
        }`,
        `// Another solution code here`,
        // ... add one answer string for each question
    ]
};

const loginLink = 'https://www.hackerrank.com/auth/login';
const email = 'abcd1234@qwer.com';
const password = '1234567890';

(async function automateHackerrank() {
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--start-maximized'],
        defaultViewport: null
    });

    const page = await browser.newPage();

    // LOGIN
    await page.goto(loginLink, { waitUntil: 'networkidle2' });
    await page.type("input[id='input-1']", email, { delay: 50 });
    await page.type("input[type='password']", password, { delay: 50 });
    await page.click('button[data-analytics="LoginPassword"]', { delay: 50 });

    // Navigate to Algorithms → Warmup
    await waitAndClick('.topic-card a[data-attr1="algorithms"]', page);
    await waitAndClick('input[value="warmup"]', page);

    // Wait for questions to load
    await page.waitForTimeout(3000);

    // Get all challenges
    const questionsArr = await page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled');
    console.log(`📌 Found ${questionsArr.length} questions`);
    console.log(`📝 Solving question ${i + 1} of ${questionsArr.length}...`);
    console.error(`❌ Error in waitAndClick for ${selector}:`, err);
    // Loop through all questions and solve them one by one
    // Loop through all questions and solve them one by one
   for (let i = 0; i < questionsArr.length && i < codeObj.answers.length; i++) {
        console.log(`📝 Solving question ${i + 1} of ${questionsArr.length}...`);
        await solveQuestion(page, questionsArr[i], codeObj.answers[i]);

        // Instead of going back, directly navigate to warmup page
        await page.goto('https://www.hackerrank.com/domains/algorithms/warmup', {
        waitUntil: 'networkidle0'
        });
        await page.waitForTimeout(2000);

        // Refresh the questions list for the next loop
        questionsArr = await page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled');
    }

    console.log("✅ All questions solved!");
    // await browser.close(); // Uncomment to close browser
})();

// Utility: Wait and Click
async function waitAndClick(selector, page) {
    try {
        await page.waitForSelector(selector, { visible: true });
        await page.click(selector, { delay: 50 });
    } catch (err) {
        console.error(`❌ Error in waitAndClick for ${selector}:`, err);
    }
}

// Question Solver
async function solveQuestion(page, question, answer) {
    await question.click();
    await page.waitForTimeout(2000); // let the question load

    // Focus editor
    await waitAndClick('.monaco-editor.no-user-select.vs', page);
    await waitAndClick('.checkbox-input', page);

    // Type in custom input
    await page.waitForSelector('textarea.custominput', { visible: true });
    await page.type('textarea.custominput', answer, { delay: 10 });

    // Select & cut text from custom input
    await page.keyboard.down('Control');
    await page.keyboard.press('A');
    await page.keyboard.press('X');
    await page.keyboard.up('Control');

    // Paste into main editor
    await waitAndClick('.monaco-editor.no-user-select.vs', page);
    await page.keyboard.down('Control');
    await page.keyboard.press('A');
    await page.keyboard.press('V');
    await page.keyboard.up('Control');

    // Run code
    await page.click('.hr-monaco_run-code', { delay: 50 });

    // Wait for submission to process
    await page.waitForTimeout(4000);
}