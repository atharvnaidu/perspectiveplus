export const checkSubtitle = async (subtitle) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/check-subtitle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subtitle }),
      });
  
      // Check if the response is valid
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const data = await response.json();
  
      // Ensure that the response has a 'length' property
      if (data && data.length !== undefined) {
        return data;  // Return the length data
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      return { length: 0 };  // Return 0 if there was an error
    }
  };
  