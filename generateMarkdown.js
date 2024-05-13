// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const renderLicenseBadge = license => license ? 
    `![License:](https://img.shields.io/badge/license-${ license }-blue)` : " ";


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    console.log(license);
    if (!license) {
        return "";
    } else if (license === "MIT License") {
        return "https://opensource.org/license/mit";
    } else if (license === "GNU General Public License (GPL)") {
        return "https://www.gnu.org/licenses/gpl-3.0.en.html";
    } else if (license ==="Apache License 2.0") {
        return "https://www.apache.org/licenses/LICENSE-2.0";
    } else if (license === "Mozilla Public License 2.0") {
        return "https://www.mozilla.org/en-US/MPL/2.0/";
    } else if (license === "Open Software License") {
        return "https://opensource.org/license/osl-3-0-php";
    } else if (license === "The Unlicense") {
        return "https://choosealicense.com/licenses/unlicense/";
    };
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

const renderLicenseSection = license => license ? `Licensed by ${license}` : "";


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` 
# ${data.title}
# ${renderLicenseBadge(data.license)}

## Table of Contents 

1. [Description](#description)
2.  [Installation](#installation)
3.  [License](#license)
4.  [Usage](#usage)
5.  [Contributing](#contributing)
6.  [Testing](#testing)
7. [Questions](#questions)

___

## 1. Description
    
        ${data.description}

___

## 2.   Installation

        ${data.installation}

___

## 3.   License

        ${renderLicenseSection(data.license)}
        ${renderLicenseLink(data.license)}

___

## 4.   Usage

        ${data.usage}

___

## 5.   Contributing

        ${data.contributing}

___

## 6.   Testing 

        ${data.tests}

___

## 7. Questions

        My GitHub is at https://github.com/${data.github}.

        For additional questions, please reach me at ${data.email}.
`;
}

module.exports = generateMarkdown;
