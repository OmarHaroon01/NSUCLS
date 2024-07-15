# NSUCLS (North South University Complaint Lodge System)

## Overview

NSUCLS is an online platform designed for the members of North South University (NSU) to lodge complaints if they face any issues. This system allows users to file complaints against NSU staff, faculty, or students. Once a complaint is lodged, it is instantly reviewed by a faculty member or the system admin. The main aim of NSUCLS is to ensure a faster and easier approach for members of NSU to lodge and resolve complaints.

## Features

- **User-friendly Interface:** NSUCLS provides an intuitive interface for easy navigation and usage.
- **Speech Recognition:** Users can lodge complaints using speech recognition, making the process quicker and more accessible.
- **Instant Review:** Complaints are immediately reviewed by a designated faculty member or system admin.

## Repository Structure


### SRS (Software Requirements Specification)

This folder contains the detailed requirements for the NSUCLS project. It outlines the functional and non-functional requirements, system overview, and user interactions.

### SDS (Software Design Specification)

This folder includes the design specifications for the NSUCLS project. It provides detailed design information, including architecture, data models, and component interactions.

### Project

- **Backend:** Contains the server-side code, APIs, and database management for the NSUCLS.
- **Frontend:** Contains the web-based client-side code for the NSUCLS.
- **Android App:** Contains the Android application code for the NSUCLS.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Android Studio (for Android app development)
- MySQL

### Installation

To run this project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/OmarHaroon01/NSUCLS.git
    ```

2. Navigate to the project directory:

    ```bash
    cd NSUCLS
    ```

3. Install dependencies for both frontend and backend:

    ```bash
    # For backend
    cd Project/backend
    npm install

    # For frontend
    cd ../frontend
    npm install
    ```

4. Set up your environment variables. Create a `.env` file in the `backend` directory and add CLIEND_ID, EMAIL and PASSWORD for sending email for email verification and using google oauth:

    ```env
    # Follow the instruchere here for CLIENT_ID
    # https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid
    CLIENT_ID=your_client_id 
    EMAIL=your_email
    #Visit https://security.google.com/settings/security/apppasswords to create app password
    PASSWORD=your_app_password
    ```

5. Run the server:

    ```bash
    # For backend
    cd Project/backend
    npm start

    # For frontend
    cd ../frontend
    npm start
    ```

6. Open your browser and go to `http://localhost:3000`.