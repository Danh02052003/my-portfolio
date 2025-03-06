// frontend/src/api/index.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = {
  // Entries endpoints
  getEntries: async () => {
    const response = await axios.get(`${API_URL}/entries`);
    return response.data;
  },
  
  addEntry: async (entryData) => {
    const response = await axios.post(`${API_URL}/entries`, entryData);
    return response.data;
  },
  
  updateEntry: async (id, entryData) => {
    const response = await axios.put(`${API_URL}/entries/${id}`, entryData);
    return response.data;
  },
  
  deleteEntry: async (id) => {
    const response = await axios.delete(`${API_URL}/entries/${id}`);
    return response.data;
  },
  
  // Projects endpoints
  getProjects: async () => {
    const response = await axios.get(`${API_URL}/projects`);
    return response.data;
  },
  
  addProject: async (name) => {
    const response = await axios.post(`${API_URL}/projects`, { name });
    return response.data;
  },
  
  // Technologies endpoints
  getTechnologies: async () => {
    const response = await axios.get(`${API_URL}/technologies`);
    return response.data;
  },
  
  addTechnology: async (name) => {
    const response = await axios.post(`${API_URL}/technologies`, { name });
    return response.data;
  },
  
  // Stats endpoints
  getStats: async () => {
    const response = await axios.get(`${API_URL}/stats`);
    return response.data;
  }
};

export default api;