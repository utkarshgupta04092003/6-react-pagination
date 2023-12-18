# React Pagination Project


## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [How to Use](#how-to-use)
4. [Screenshots](#screenshots)
5. [Project Structure](#project-structure)
6. [Technologies Used](#technologies-used)
7. [Contributions](#contributions)
8. [License](#license)

## Overview

The React Pagination Project is a web application built with React, Vite, and Tailwind CSS. It fetches data(100 posts) from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) in the `App.jsx` file and sends the modified data to other components for display. The project includes `PostPerPage.jsx` to set the number of posts per page, `Pagination.jsx` to display pagination, and `Post.jsx` to display the modified data.

## Features

- **Data Fetching:** Fetches data from the JSONPlaceholder API in the `App.jsx` file.

- **Component Communication:** Sends data to other components (`PostPerPage.jsx`, `Pagination.jsx`, `Post.jsx`) for display.

- **Vite, React, and Tailwind CSS:** Utilizes Vite for a fast development experience, React for dynamic UI updates, and Tailwind CSS for modern styling.

## How to Use

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/utkarshgupta04092003/6-react-pagination.git
   ```

2. Navigate to the project directory.

   ```bash
   cd 6-react-pagination
   ```

3. Install dependencies.

   ```bash
   npm install
   ```

4. Start the development server.

   ```bash
   npm run dev
   ```

5. Open your browser and visit [http://localhost:5173](http://localhost:5173) to explore the React Post Viewer.

## Screenshots

![React Post Viewer Screenshot](./screenshot.png)

## Project Structure

- **src/App.jsx:** Fetches data from the JSONPlaceholder API and sends it to other components for display.

- **src/components/PostPerPage.jsx:** Sets the number of posts per page.

- **src/components/Pagination.jsx:** Displays pagination for navigating through posts.

- **src/components/Post.jsx:** Displays the modified post data.


## Technologies Used

- React
- Vite
- Tailwind CSS

## Contributions

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE), allowing you to use and modify the code for personal and commercial purposes.
