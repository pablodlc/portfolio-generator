const inquirer = require('inquirer');
inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));
// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });
// Above this line was commented out per instructions in 9.3.5

// from before 9.3.5
// const profileDataArgs = process.argv.slice(2);
// const [name, github] = profileDataArgs;
// const generatePage = require('./src/page-template.js');
// fs.writeFile('./index.html', generatePage(name, github), err => {
//     if (err) throw new Error(err);
//     console.log('Portfolio complete! Check out index.html to see the output!');
// });

                                    //Content from 9.1, for reference 
// console.log(profileDataArgs);

// // Notice the lack of parentheses around the `profileDataArr` parameter?
// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('================');

//     // Is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);