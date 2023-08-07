import axios from 'axios';
import { IP_API_KEY, IP_API_URL } from '../config/constants';

export const fetchIpData = async ipAddress => {
  try {
    const response = await axios.get(IP_API_URL, {
      params: {
        apiKey: IP_API_KEY,
        ipAddress: ipAddress,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
