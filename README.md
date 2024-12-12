![header1 2](https://github.com/ravikant-diwakar/XploreWorld/assets/110620635/9387d108-d848-455f-8c9e-f7101d9eab0e)

## About

XploreWorld is a web application designed to explore cities and countries, offering various features like geolocation, user authentication, and city management. The application allows users to view, create, and delete cities, explore country data, and interact with real-time maps. It is built using React and integrates custom hooks for location handling and user authentication. The app is intended to be a fun, informative way to discover cities worldwide and manage personal city information.

## Features

### 1. **City Management**
   - **View Cities**: Users can browse a list of cities fetched from a remote API (`json-server` hosted on Render).
   - **Create Cities**: Users can add new cities to the list via a form.
   - **Delete Cities**: Users can remove cities from the list.
   - The app uses a **context-based approach** (`CitiesContext`) for managing city data, ensuring easy state management and updates.

### 2. **User Authentication**
   - Users can log in with **fake credentials** (predefined in the app for testing purposes).
   - The authentication state is managed using **`FakeAuthContext`** which handles login and logout actions.
   - User data is stored in the app, including a name, email, avatar, and authentication state, which enables personalized interactions.

### 3. **Geolocation**
   - The app tracks the user’s **geolocation** using the **`useGeolocation`** custom hook, allowing the app to access the user’s current position.
   - If geolocation is supported by the browser, the app will show the user's latitude and longitude, and users can view nearby cities or use location-based functionality.

### 4. **URL-based Positioning**
   - The app can read **latitude** and **longitude** values directly from the URL query parameters using the **`useUrlPosition`** hook.
   - This enables URL-based navigation for specific city locations, allowing users to share locations easily or direct others to a specific position on the map.

### 5. **Real-time Interaction**
   - **API Integration**: The app fetches city data from an external API, allowing real-time updates to the cities list.
   - Users can interact with dynamic data that changes when cities are added or removed.
   - Real-time error handling with user-friendly messages.

## Technology Stack

- **React**: Frontend framework for building components and handling user interactions.
- **React Context API**: Used for state management across components, ensuring global state is consistent for cities and user authentication.
- **React Router**: For navigating between pages and using URL parameters (e.g., to pass location coordinates).
- **Custom Hooks**: 
  - `useGeolocation`: Fetches and manages the user's geolocation.
  - `useUrlPosition`: Extracts location data (latitude and longitude) from URL parameters.
- **JSON Server**: Used as a mock backend API for storing and fetching city data.
- **CSS**: Styled components using Tailwind CSS for responsive design.

## Usage

 **Clone the repository:**
   ```bash
   git clone https://github.com/ravikant-diwakar/XploreWorld
   ```

 **Install dependencies:**
   ```bash
   npm install
   ```

 **Start the development server:**
   ```bash
   npm run dev
   ```

 **Open your browser and navigate to:**
   ```
   http://localhost:5173
   ```
   to view the application.

## Getting Involved

If you have any suggestions, feature requests, or find any bugs, feel free to open an issue or submit a pull request. Your contributions are greatly appreciated!

## Future Enhancements

- **User Authentication**: Implementing user login and personalized data storage.
- **API Enhancements**: Improving the API to store city data without requiring logins.
- **Additional Features**: Adding travel statistics and user profiles.

---

Feel free to explore the project, suggest new features, or contribute in any way you can. Happy coding! :>
