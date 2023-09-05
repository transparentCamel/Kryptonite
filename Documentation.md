
# Kryptonite

A crypto currency website with real-time values and graphs.

## Tech Stack

React.js
Node.js
Express.js
MongoDB
GitHub

## Crypto Data

### CCXT Library

ccxt library was used to fetch coins from binance exchange and their last price tickers.

### CryptoCompare API

API was used to gather data for charts.

## Functionality

Website uses React.js library for component-based architecture which supports the project's scalability and maintainability.

### Implemented Functions

Ability to search crypto currencies, view graphs, select data range for graphs, UI actions by user are logged in MongoDB database.

## Design Solutions

Website has a responsive design and some hover effects, this website focuses on functionality, so style was left fairly simple. To achieve desired styles project was made with styled-components library which improves readability and maintainability. For drawing charts I used react-chartjs library.

## How to run The Project

### Client Side

To run client side you have to locate to client folder via terminal (kryptonite/client) and type command npm start, this script will run React.js part of the project in your local server.

### Server Side

To execute server side functions you have to connect to your MongoDB local server and locate to server folder via terminal (kryptonite/server) and run command npm start, once command is executed you should be notified in console: "server is running".

## Notes

Could not execute this project with only ccxt library because of an error that I couldn't resolve when graph data was fetched. Search input does not have validation.






