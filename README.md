# GoItems Packer

GoItems Packer is a smart packing list generator and checklist application designed to help users prepare for various events, trips, and activities. It suggests items based on the selected event type and allows users to customize, save, and manage their packing lists efficiently.

This is a purely static web application built with HTML, CSS, and JavaScript. It runs entirely in the user's browser and uses local storage to save lists and templates, requiring no backend server.

## Features

*   **Event-Based Suggestions:** Select an event category (e.g., Travel, Outdoor, Health) and a specific event type (e.g., Weekend Getaway, Camping, Hospital Stay) to generate a suggested packing list.
*   **Customization:**
    *   Add your own custom items to any list.
    *   Remove suggested items you don't need.
*   **Item Management:**
    *   **Check/Uncheck:** Mark items as packed by clicking on their name or using the checkbox.
    *   **Quantity:** Adjust the quantity needed for each item using +/- buttons or by typing in the number field.
    *   **Notes:** Add specific notes or reminders to individual items (e.g., "Buy new one", "Borrow from friend").
    *   **Categories:** View the category assigned to each item (e.g., Clothing, Toiletries, Electronics).
*   **List Persistence:**
    *   **Save/Load Lists:** Save your current packing list with a custom name to your browser's local storage. Load previously saved lists to continue packing or review.
    *   **Save/Load Templates:** Save a finalized list structure (including custom items and quantities, but not checked status or notes) as a reusable template for similar future events.
*   **Printing:** Print your packing list for offline use.
*   **Responsive Design:** The application is designed to be user-friendly on both desktop and mobile devices.
*   **Static Application:** Runs entirely in the browser, making it easy to deploy on any static web hosting service.

## Technology Stack

*   HTML5
*   CSS3
*   JavaScript (Vanilla)

## Deployment

This application is fully static. To deploy it, simply host the contents of the `goitems_packer_static` directory (which includes `index.html`, `style.css`, `script.js`, `logo.svg`, `LICENSE`, and this `README.md`) on any static web hosting provider.

Common options include:

*   **GitHub Pages:**
    1.  Create a new repository on GitHub (or use an existing one).
    2.  Upload the application files (`index.html`, `style.css`, `script.js`, `logo.svg`, `LICENSE`, `README.md`) to the repository.
    3.  Go to the repository's Settings > Pages.
    4.  Under "Build and deployment", select "Deploy from a branch".
    5.  Choose the branch containing your files (e.g., `main`) and the `/ (root)` folder.
    6.  Save the settings. GitHub will provide you with the public URL.
*   **Cloudflare Pages:**
    1.  Log in to your Cloudflare dashboard.
    2.  Go to Workers & Pages > Create application > Pages > Upload assets.
    3.  Give your project a name.
    4.  Drag and drop the application files or select them.
    5.  Click "Deploy site". Cloudflare will provide the public URL.
*   **Netlify:**
    1.  Log in to your Netlify account.
    2.  Go to "Sites" and drag & drop the folder containing the application files onto the designated area.
    3.  Netlify will automatically deploy the site and provide a URL.
*   **Other Static Hosts:** Any service that can serve static HTML, CSS, and JavaScript files (like Vercel, AWS S3, Google Cloud Storage, etc.) can be used.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
