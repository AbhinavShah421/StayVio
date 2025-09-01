# StayVio

StayVio is a modern web application for managing and showcasing accommodations. This repository contains both the frontend and backend code.

## Prerequisites

Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Git](https://git-scm.com/)

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/AbhinavShah421/StayVio.git
cd StayVio
```

### 2. Install Dependencies
#### Frontend
```bash
cd StayVio
npm install
```

#### Backend
```bash
cd server
npm install
```

### 3. Configure Environment Variables
#### Frontend
Create a `.env` file in the `StayVio` directory:
```
VITE_BACKEND_URL=http://localhost:3001
```

#### Backend
Create a `.env` file in the `server` directory:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=recipient-email@gmail.com
```
Replace the placeholders with your actual email credentials.

### 4. Start the Application
#### Start the Backend
```bash
cd server
node index.js
```

#### Start the Frontend
```bash
cd StayVio
npm run dev
```

### 5. Access the Application
Open your browser and navigate to:
```
http://localhost:5173
```

## Features
- Contact form with email functionality
- Google Maps integration
- MongoDB for data storage

## Contributing
Feel free to fork this repository and submit pull requests.

## License
This project is licensed under the MIT License.
