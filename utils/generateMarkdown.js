// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  }
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${description}

  ### Why This Project Was Created

  ${data.why}

  ### Problem Solved

  ${data.problemSolved}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Questions](#questions)
  - [License](#license)
 
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}


  ## License

  ![](https://img.shields.io/badge/license-${data.licenseList}-blue)


  ## [Questions](#table-of-contents)

  Please contact me with any questions using the following links

  [GitHub](https://github.com/${data.gitHubUserName})

  [Email: ${data.email}](mailto:${data.email})


`;
}

module.exports = generateMarkdown;