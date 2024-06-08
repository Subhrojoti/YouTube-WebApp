# YouTube-Inspired Video Sharing Application


## Project Overview
This project is a basic video-sharing application inspired by YouTube. It includes features such as video listings, playback, recommendations, user authentication, watchlist management, and more. The app aims to provide a seamless video browsing and watching experience, with an intuitive and visually appealing user interface.

## Features
- Video listings and playback
- Video recommendations
- User authentication (login/signup) using Firebase
- Watchlist management for logged-in users
- Browse videos without requiring login/signup
- Efficient data management with Redux Toolkit
- Authentication redirect for watchlist management
- Search functionality
- Responsive design with Tailwind CSS
- Thoroughly tested for a smooth user experience

## Installation and Setup
### Prerequisites
- Node.js and npm installed on your machine
- Firebase project set up for authentication

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo

2. **Install dependencies:**
    ```bash
    npm install
    ```
3. **Set up Firebase:**
    - Create a Firebase project at Firebase Console.
    - Enable Authentication with Email/Password.
    - Obtain your Firebase config and replace it in your project.
4. **Run the application:**
    ```bash
    npm run dev
    ```

## Technologies Used
- React with Vite
- Redux Toolkit
- Firebase Authentication
- Tailwind CSS
- React Router

## Detailed Features
### Frontend Interface
The frontend interface is designed to resemble YouTube, featuring video listings, playback, and recommendations. The interface is built using React and styled with Tailwind CSS, ensuring a responsive design for seamless use across devices.

### User Authentication and Watchlist Management
User authentication is managed using Firebase. Users can sign up, log in, and manage their watchlist. Watchlist management allows users to save their favorite videos for later viewing.

### Browsing Without Login/Signup
Users can browse and view videos without needing to log in or sign up, providing easy access to content.

### Data Management with Redux Toolkit
Redux Toolkit is used for efficient state management across the application. Redux Toolkit simplifies the setup and ensures smooth data flow within the app.

### Authentication Redirect
When a user attempts to add a video to the watchlist, they are redirected to the login/signup page if not already logged in.

### Search Functionality
The search functionality allows users to search for videos easily, enhancing content discovery.

### UI/UX Design
The application uses Tailwind CSS for styling, ensuring a visually appealing and user-friendly interface. The design is intuitive, making navigation and interaction seamless.

## Challenges Faced
- **Responsiveness:** Ensuring the application is responsive across various devices was challenging but achieved through careful design and testing with Tailwind CSS.
- **Redux Toolkit Implementation:** Managing state efficiently with Redux Toolkit was a learning curve but provided a robust solution for state management.
- **Firebase Authentication:** Integrating Firebase for the first time posed challenges, but it was successfully implemented with secure user authentication.

## Deployment
The application has been successfully deployed on Netlify. You can access it [here](https://tube-buddy.netlify.app/).

## Conclusion
This project showcases a basic yet functional video-sharing application inspired by YouTube. It includes key features such as video listings, playback, user authentication, and watchlist management, providing a comprehensive and user-friendly experience.
