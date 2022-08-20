### User Game App ###
    This App create using react.js for the user interface and save user data when register using axios and json-server.
    
    In this repository there are server and client folder. Server folder for save OpenAPI that create using https://editor.swagger.io/. Client folder for save the react.js app components.

### Installation ###
    Please install this package before running program:
    - cd client
    - npm install -g json-server
    - npm i axios

### Run Program ###
    To run server folder that contain OpenAPI:
    - cd server
    - npm start
    
    Run User Game App:
    - First you must running json-server:
      - Open Terminal 
      - cd client/src/components/assets
      - json-server --watch user.json --port 3001
      - JSON Server running at http://localhost:3001/User
  
    - Then open another terminal to run react.js:
      - cd client
      - npm start  
      - React.js running at http://localhost:3000