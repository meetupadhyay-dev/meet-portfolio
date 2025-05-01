# TechStack Project

This is a React-based web application showcasing the tech stack and skills of a developer. It provides an interactive and visually appealing interface to explore different technologies and tools used in modern web development.

## Libraries and Tools Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for creating responsive, modern designs.
- **Devi-icons**: A popular icon library for scalable vector icons.
- **React Icons**: A collection of over 2000 icons for use in your React projects.


## Project Structure

The project is structured as follows:

/src /components TechStack.js # Component displaying tech stack and skills /utils /data techstack.js # Contains skills and tools data (name, icon) App.js # Main entry component index.js # Entry point for React app


## Sections Included in the Project

1. **Tech Stack Section**:
   - Display skills and tools used by the developer.
   - Each tool/skill is represented by an icon and name.
   - Tabs to toggle between "Skills" and "Tools" using React `useState`.
   
2. **Interactive Tabs**:
   - "Skills" and "Tools" tabs allow the user to filter between different categories of expertise.

3. **Responsive Design**:
   - The project is designed to be fully responsive using **Tailwind CSS** for layout adjustments, with flexbox for positioning and grid for organizing icons.

## Installation Instructions

To run this project locally on your machine, follow these steps:

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd <project-folder>
```

### 2. Install Dependencies

```bash
npm install
```
This will install all the libraries and packages listed in package.json.

### 3. Run the Development Server

```bash
npm start
```
This will start the app at http://localhost:5173 in your browser.

### 4. Build the Project (Optional)

```bash
npm run build
```

This will generate a build/ folder with optimized assets that can be deployed to a live server.