# skill-analysis
# Skill Analysis Dashboard

A web application to analyze skills based on various parameters and provide insights through visualizations.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Skill Analysis Dashboard is a web application designed to provide insights into skill proficiency and question-wise performance analysis. It offers a comprehensive view through various visualizations and data representations.

## Features

- Skill-wise analysis
- Question-wise analysis
- Comparison graphs
- Interactive UI
- Responsive design

## Technologies Used

- Next.js
- React.js
- Tailwind CSS
- Chart.js
- Netlify (for deployment)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/skill-analysis.git
    cd skill-analysis
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Build the project:**

    ```sh
    npm run build
    ```

4. **Run the development server:**

    ```sh
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

- Navigate to the homepage to view the overall skill analysis.
- Use the provided filters to customize the analysis.
- View detailed question-wise analysis to understand performance on each question.

## Deployment

The application is deployed on Netlify. Follow these steps to deploy:

1. **Install Netlify CLI:**

    ```sh
    npm install -g netlify-cli
    ```

2. **Login to Netlify:**

    ```sh
    netlify login
    ```

3. **Initialize the project:**

    ```sh
    netlify init
    ```

4. **Deploy the project:**

    ```sh
    netlify deploy
    ```

5. **Deploy to production:**

    ```sh
    netlify deploy --prod
    ```

Alternatively, you can use the Netlify web interface for deployment:

1. Build the project using `npm run build`.
2. Zip the `.next` directory.
3. Log in to [Netlify](https://www.netlify.com/).
4. Create a new site and drag and drop the zipped directory to deploy.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b
