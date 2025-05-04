# Meep – Frontend (React Native + Expo)

## Tech Stack

- React Native
- Expo
- TypeScript
- Axios (for API requests)
- NativeWind (Tailwind CSS for React Native)

## Setup Instructions

### 1. Install dependencies

    yarn install

If you're using npm instead:

    npm install

### 2. Start the development server

    yarn start

This will launch Expo Dev Tools in your browser.  
You can run the app on your physical device using the **Expo Go** app or on an iOS/Android emulator.

## API Configuration

Update the API base URL in your frontend code (example: `api/jobs.ts`):

    const API_URL = 'http://YOUR_LOCAL_IP:8000';

Replace `YOUR_LOCAL_IP` with your computer's LAN IP address.  
You can find it using:

    ipconfig getifaddr en0      # macOS
    ipconfig                    # Windows

Make sure your Django backend is running and accepting connections:

    python manage.py runserver 0.0.0.0:8000

## Folder Structure

    cab-app/
    ├── assets/           # Fonts, images, icons
    ├── components/       # Reusable UI elements (e.g. JobCard, Button)
    ├── screens/          # App screens (JobList, JobCreate, etc.)
    ├── api/              # API requests (e.g. fetchJobs, createJob)
    ├── navigation/       # Stack/tab navigation configuration
    ├── constants/        # Global styles, colors, etc.
    └── App.tsx           # Entry point

## Features

- View list of available jobs
- Create new jobs from the mobile app
- Claim jobs (coming soon)
- User login and authentication (planned)

## License

MIT
