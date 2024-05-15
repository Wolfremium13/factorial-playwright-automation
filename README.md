# 🤖 Factorial Playwright Automation

This is a simple automation project using Playwright to automate the Factorial
HR website. I recommend to fork this repository and use it as a starting point
for your own automation projects.

## ✨ Features

- **Clock in**: The automation clock in of the user on the Factorial HR website
  by using the cron job at 7 AM.
- **Clock out**: The automation clock out of the user on the Factorial HR
  website by using the cron job at 15 PM.
- **Fridays**: On Fridays, the automation clock out of the user on the Factorial
  HR website by using the cron job at 11 AM.

## 🔧 Configuration

First, you need to install the dependencies by running the following command:

```bash
npm i
```

The project uses a `.env` file to store the environment variables. You can
create a `.env` file in the root of the project and add the following variables:

```md
FACTORIAL_USER=<your_user> FACTORIAL_PASSWORD=<your_password>
```

> **Note:** Replace `<your_user>` and `<your_password>` with your Factorial HR
> credentials. On GitHub, you should never commit your `.env` file. You can add
> it to the `.gitignore` file to avoid committing it.

Or you could copy the `.env.example` file and rename it to `.env`:

```bash
cp .env.example .env
```

Those variables should be configured on your repository secrets to if you are
using GitHub Actions.

## 🚀 Running the tests

To run the tests, you can use the following command:

```bash
npx playwright test
```

## 🔀 GitHub Actions

The project has a GitHub Actions workflow that runs the tests on every push to
the `main` branch. 
