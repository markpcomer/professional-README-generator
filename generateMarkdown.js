
// Renders a license badge for the chosen license, or an empty string.
const renderLicenseBadge = license => license ? 
    `![License:](https://img.shields.io/badge/License-${ license }-blue)` : " ";

// Returns a license link or an empty string.
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

## [Description](#table-of-contents)
${data.description}

___

## [Installation](#table-of-contents)
${data.installation}

___

## [License](#table-of-contents)
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

___

## [Usage](#table-of-contents)
 ${data.usage}

___

## [Contributing](#table-of-contents)
${data.contributing}

___

## [Testing](#table-of-contents)
${data.tests}



## [Questions](#table-of-contents)
My GitHub is at (https://github.com/${data.github})
For additional questions, please reach me at ${data.email}.
`;
}

module.exports = generateMarkdown;
