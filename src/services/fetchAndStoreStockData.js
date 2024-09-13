// src/services/fetchAndStoreStockData.js
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import axios from 'axios';

// Replace with your Polygon.io API key
const POLYGON_API_KEY = 'WUY8GIuvo4_zLHDpzGLLm9nJzOLSORf1';
const POLYGON_API_URL = 'https://api.polygon.io/v2/aggs/ticker/AAPL/prev?apiKey=' + POLYGON_API_KEY;

const fetchDataAndStore = async () => {
  try {
    // Example ticker symbols; adjust as needed
    const tickers = ['AAPL', 'MSFT', 'GOOGL'];

    for (const ticker of tickers) {
      const response = await axios.get(POLYGON_API_URL.replace('{ticker}', ticker));
      const stockData = response.data;

      const stockCollection = collection(db, 'stocks');
      await addDoc(stockCollection, {
        ticker,
        ...stockData,
        timestamp: new Date().toISOString(),
      });
    }
  } catch (error) {
    console.error('Error fetching or storing stock data', error);
  }
};

fetchDataAndStore();
