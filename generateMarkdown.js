
// Renders a license badge for the chosen license, or an empty string.
const renderLicenseBadge = license => license ? 
    `![License:](https://img.shields.io/badge/License-${ license }-blue)` : " ";

// Returns a license link or an empty string.
function renderLicenseLink(license) {
    console.log(license);
    if (!license) {
        return "";
    } else if (license == "MIT_License") {
        return "https://opensource.org/license/mit";
    } else if (license == "GNU_General_Public_License_(GPL)") {
        return "https://www.gnu.org/licenses/gpl-3.0.en.html";
    } else if (license =="Apache_License_2.0") {
        return "https://www.apache.org/licenses/LICENSE-2.0";
    } else if (license == "Mozilla_Public_License_2.0") {
        return "https://www.mozilla.org/en-US/MPL/2.0/";
    } else if (license == "Open_Software_License") {
        return "https://opensource.org/license/osl-3-0-php";
    } else if (license == "The_Unlicense") {
        return "https://choosealicense.com/licenses/unlicense/";
    };
}

// Returns an empty string or the license section of the README
const renderLicenseSection = license => license ? `Licensed by ${license}` : "";


//  Generates the markdown for README 
function generateMarkdown(data) {
  return ` 
# ${data.title}

# ${renderLicenseBadge(data.license)}

## Table of Contents 

* [Description](#description)
* [Installation](#installation)
* [License](#license)
* [Usage](#usage)
* [Contributing](#contributing)
* [Testing](#testing)
* [Questions](#questions)

___

## [Description](#description)
${data.description}

___

## [Installation](#installation)
${data.installation}

___

## [License](#license)
# ${renderLicenseBadge(data.license)}     
${renderLicenseSection(data.license)}:    
${renderLicenseLink(data.license)}    

___

## [Usage](#usage)
 ${data.usage}

___

## [Contributing](#contributing)
${data.contributing}

___

## [Testing](#testing)
${data.tests}



## [Questions](#questions)
My GitHub is at (https://github.com/${data.github})
For additional questions, please reach me at ${data.email}.
`;
}

module.exports = generateMarkdown;
