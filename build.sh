#!/bin/bash

# Install dependencies for backend
echo "Installing backend dependencies..."
cd server/backend
npm install
cd ../..

# Install dependencies for client
echo "Installing client dependencies..."
cd client
npm install
npm run build
cd ..

# Copy built frontend to public directory for backend to serve
echo "Build completed successfully!"
