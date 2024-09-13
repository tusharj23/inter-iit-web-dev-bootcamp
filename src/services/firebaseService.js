// src/services/firebaseService.js
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const fetchStockData = async () => {
  const stockCollection = collection(db, 'stocks');
  const stockSnapshot = await getDocs(stockCollection);
  const stockList = stockSnapshot.docs.map(doc => doc.data());
  return stockList;
};
