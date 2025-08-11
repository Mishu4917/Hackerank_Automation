const puppeteer = require('puppeteer')

const codeObj = require('./codes')

const loginLink = 'https://www.hackerrank.com/auth/login'
const email ='abcd1234@qwer.com'
const password = '1234567890'


let browserOpen = puppeteer.launch({
    headless : false,

     args :['--start-maximized'],

     defaultViewport:null
})

let page

browserOpen.then(function(browserObj){
    let browserOpenPromise = browserObj.newPage()
    return browserOpenPromise;
}).then(function(newTab){
    page = newTab
    let hackerrankOpenPromise = newTab.goto(loginLink)
    return hackerrankOpenPromise
}).then(function(){
    let emailIsEntered = page.type("input[id='input-1']",email,{delay:50})
    return emailIsEntered
}).then(function(){
    let passwordIsEntered = page.type("input[type='password']",password,{delay:50})
    return passwordIsEntered
}).then(function(){
    let loginButtonClicked = page.click('button[data-analytics="LoginPassword"]',{delay:50})
    return loginButtonClicked
}).then(function(){
    let clickOnAlgoPromise = waitAndClick('.topic-card a[data-attr1="algorithms"]',page)
    return clickOnAlgpPromise
}).then(function(){
    let geToWarmUp = waitAndClick('input[value="warmup"]',page)
    return geToWarmUp
}).then(function(){
    let waitfor10Seconds = page.waitFor(10000)
    return waitfor3Seconds
}).then(function(){
    let allChallengesPromise = page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled',{delay:50})
    return allChallengesPromise
}).then(function(questionsArr){
    console.log('number of questions',questionsArr.length)
    let questionWillBeSolved = questionSolver(page,questionsArr[0],codeObj.answers[0])
    return questionWillBeSolved
})

function waitAndClick(selector,cPage){
    return new Promise(function(resolve,reject){
    let waitForModePromise = cPage.waitForSelector(selector)
    waitForModelPromise.then(function(){
        let clickModal = cPage.click(selector)
        return clickModal
    }).then(function(){
        resolve()
    }).catch(function(err){
        reject()
    })
    })
}

function questionSolver(page, question , answer){
    return new Promise(function(resolve,reject){
        let questionWillBeClicked = question.click()
        questionWillBeClicked.then(function(){
            let EditorInFocusPromise = waitAndClick('.monaco-editor.no-user-select.vs',page)
            return EditorInFocusPromise
        }).then(function(){
            return waitAndClick('.checkbox-input',page)
        }).then(function(){
            return page.waitForSelector('textarea.custominput',page)
        }).then(function(){
            return page.type('textarea.custominput',answer,{delay:10})
        }).then(function(){
            let ctrlIsPressed = page.keyboard.down('Control')
            return AisPressed
        }).then(function(){
            let XisPressed = page.keyboard.press('X',{delay:100})
                return XisPressed
        }).then(function(){
            let CtrlisUnPressed = page.keyboard.up('Control')
            return CtrlisUnPressed
        }).then(function(){
            let mainEditorInFocus = waitAndClick('.monaco-editor.no-user-select.vs',page)
            return mainEditorInFocus
        }).then(function(){
            let ctrlIsPressed = page.keyboard.down('Control')
            return ctrlIsPressed
        }).then(function(){
            let AisPressed = page.keyboard.press('A',{delay:100})
            return AisPressed
        }).then(function(){
            let VisPressed = page.keyboard.press('V',{delay:100})
            return VisPressed
        }).then(function(){
            let CtrlisUnPressed = page.keyboard.up('Control')
            return CtrlisUnPressed
        }).then(function(){
            return page.click('.hr-monaco_run-code',{delay:50})
        }).then(function(){
            resolve()
        }).catch(function(err){
            reject();
        })
    })
}

