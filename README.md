# My Website

This project is a simple website that demonstrates the use of HTML, CSS, and JavaScript. It is structured to include both development and production versions of the files.

## Project Structure

```
my-website
├── src
│   ├── index.html      # Main HTML document
│   ├── styles.css      # Styles for the website
│   └── main.js         # Main JavaScript file
├── dist
│   ├── index.html      # Optimized HTML for production
│   ├── styles.min.css  # Minimized CSS for production
│   └── main.min.js     # Minimized JavaScript for production
├── package.json        # npm configuration
├── webpack.config.js   # Webpack configuration
└── README.md           # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-website
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm start
   ```

4. Build the project for production:
   ```
   npm run build
   ```

## Usage

- The `src` folder contains the source files for development.
- The `dist` folder contains the optimized files for production use.
- Modify the files in the `src` folder and rebuild to see changes in the `dist` folder.

## License

This project is licensed under the MIT License.