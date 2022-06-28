//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//inquirer to generate questions
inquirer.prompt(
    [
        {
            type: "input",
            message: "Please provide a project title",
            name: "title",

            validate: (value)=>{ if(value){return true} else {return 'Please insert a value to continue'}},
        },
        {
            type: "input",
            message: "How do you install your app?",
            name: "installation",
            validate: (value)=>{if (value){return true} else {return 'Please insert a value to continue'}},
        },
        {
            type: "input",
            message: "Instructions to be followed:",
            name: "instructions",

            validate: (value)=>{if (value){return true} else {return 'Please insert a value to continue'}},
        },
        {
            type: "input",
            message: "Credits:",
            name: "credits",

            validate: (value)=>{if (value){return true} else {return 'Please insert a value to continue'}},
        },
        {
            type: 'input',
            message: 'How is your app used?',
            name: 'usage',

            validate: (value)=>{if (value){return true} else {return 'Please insert a value to continue'}},
        },
        {
            type: 'list',
            message: 'What license did you use?',
            name: 'license',
            choices: ['The MIT License', 'The GPL license', 'Apache license', 'GNU license', 'N/A'],

            validate: (value)=>{if (value){return true} else {return 'Please insert a value to continue'}},
        },
        {
            type: 'input',
            message: 'GitHub username',
            name: 'github',

            validate: (value)=>{if (value){return true} else {return 'Please insert a value to continue'}},
        },
        {
            type: 'input',
            message: 'Email address:',
            name: 'email',

            validate: (value)=>{if (value){return true} else {return 'Please insert a value to continue'}},
        },
    ]
).then(({
    title,
    installation,
    instructions,
    credits,
    license,
    git,
    linkedin,
    email,
    usage,
    contribution,
})=>{
//template to be used:
const template = `# ${title}
*[Installation](#installation)
*[Usage](#usage)
*[Contribution](#contribution)
*[Credits](#credits)
*[License](#license)
#[Installation]
${installation}
## Usage
${usage}
## Contribution
${instructions}
## Credits
${credits}
## License
${license}

# Contact
*Github : ${git}
*LinkedIn :${linkedin}
*E-mail :${email}`;

//Create readme using fs
createNewFile(title, template);
}
);
//createNewFile function
function createNewFile(fileName, data){
    //fs
    fs.writeFile(`./${fileName.toLowerCase().split('').join('')}.md`,data,(err)=>{
        if(err){
            console.log(err)
        }
        console.log('Your README has been generated');
    })
}
//
