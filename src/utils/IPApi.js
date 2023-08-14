import axios from 'axios';
import { IP_API_KEY, IP_API_URL } from '../config/constants';

export const fetchIpData = async (input, domain) => {
  try {
    const response = await axios.get(IP_API_URL, {
      params: {
        apiKey: IP_API_KEY,
        ...(domain ? { domain: input } : { ipAddress: input }),
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};