const generateUniqueTestData = () => {
  const timestamp = Date.now();
  const randomId = Math.floor(Math.random() * 1000);
  
  return [
    {
      name: 'Basic Test',
      data: {
        name: `John Doe${timestamp}`,
        email: `john.doe${timestamp}@example.com`,
        address: `123 Main St, New York, NY ${randomId}`,
        permanentAddress: `456 Oak Ave, Boston, MA ${randomId}`
      }
    },
    {
      name: 'Special Characters Test',
      data: {
        name: `Mariá Connoř Śmith${timestamp}`,
        email: `maria.test${timestamp}@domain.uk`,
        address: `789 Elm St, Apt #${randomId}, Los Angeles, CA 90210`,
        permanentAddress: `P.O. Box ${randomId}, Suite 456, Seattle, WA 98101`
      }
    },
    {
      name: 'Long Text Test',
      data: {
        name: `Alexander Jonathan Christopher${timestamp}`,
        email: `alexander.jonathan.christopher${timestamp}@very-long-domain-name.com`,
        address: `Very Long Address Street Name Number ${randomId}, Building Complex A, Floor 15, Apartment 1234`,
        permanentAddress: `Another Very Long Permanent Address with Multiple Lines and Complex Information ${timestamp}`
      }
    },
    {
      name: 'Minimal Data Test',
      data: {
        name: `A${timestamp}`,
        email: `a${timestamp}@b.co`,
        address: `${randomId} St`,
        permanentAddress: `${randomId + 1} Ave`
      }
    }
  ];
};

const textBoxTestDataSets = generateUniqueTestData();

module.exports = { 
  textBoxTestDataSets,
  generateUniqueTestData 
};