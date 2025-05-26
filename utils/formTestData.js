const generateUniqueFormTestData = () => {
  const timestamp = Date.now();
  const randomId = Math.floor(Math.random() * 1000);
  
  return [
    {
      name: 'Basic Form Test',
      data: {
        name: `John${timestamp}`,
        lastName: `Doe${randomId}`,
        email: `john.doe${timestamp}@example.com`,
        gender: 'Male',
        mobileNumber: '9876543210',
        dateOfBirth: '15 Jul 1990',
        subjects: ['Maths', 'Physics'],
        hobbies: ['Sports', 'Reading'],
        currentAddress: `123 Main St, City ${randomId}`,
        state: 'NCR',
        city: 'Delhi'
      }
    },
    {
      name: 'Female User Test',
      data: {
        name: `Maria${timestamp}`,
        lastName: `Garcia${randomId}`,
        email: `maria.garcia${timestamp}@example.com`,
        gender: 'Female',
        mobileNumber: '9123456789',
        dateOfBirth: '22 Dec 1995',
        subjects: ['Chemistry', 'Biology'],
        hobbies: ['Music', 'Reading'],
        currentAddress: `456 Oak Ave, Town ${randomId}`,
        state: 'Uttar Pradesh',
        city: 'Agra'
      }
    },
    {
      name: 'Minimal Required Data',
      data: {
        name: `Alex${timestamp}`,
        lastName: `Smith${randomId}`,
        email: `alex.smith${timestamp}@test.com`,
        gender: 'Other',
        mobileNumber: '9555444333',
        dateOfBirth: '01 Jan 2000',
        subjects: ['English'],
        hobbies: ['Sports'],
        currentAddress: `789 Elm St ${randomId}`,
        state: 'Haryana',
        city: 'Karnal'
      }
    },
    {
      name: 'Special Characters Test',
      data: {
        name: `José${timestamp}`,
        lastName: `O'Connor-Smith${randomId}`,
        email: `jose.oconnor${timestamp}@example-domain.co.uk`,
        gender: 'Male',
        mobileNumber: '9777888999',
        dateOfBirth: '30 Jun 1988',
        subjects: ['Maths', 'Physics', 'Chemistry'],
        hobbies: ['Sports', 'Reading', 'Music'],
        currentAddress: `Complex Address #${randomId}, Building A, Floor 5`,
        state: 'NCR',
        city: 'Noida'
      }
    }
  ];
};

const formTestDataSets = generateUniqueFormTestData();

module.exports = { 
  formTestDataSets,
  generateUniqueFormTestData 
};