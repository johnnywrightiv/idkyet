[
  {
    users: [
      {
        id: 1,
        name: "John Doe",
        email: "johndoe@example.com",
        address: {
          street: "123 Main St",
          city: "Springfield",
          state: "IL",
          zipcode: "62701",
        },
        phone: "555-1234",
        orderHistory: [
          {
            orderId: 101,
            orderDate: "2024-01-15",
            totalAmount: 250.75,
            items: [
              {
                productId: 1,
                productName: "Laptop",
                quantity: 1,
                price: 1000.0,
              },
              {
                productId: 2,
                productName: "Mouse",
                quantity: 2,
                price: 25.0,
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "janesmith@example.com",
        address: {
          street: "456 Elm St",
          city: "Shelbyville",
          state: "IL",
          zipcode: "62565",
        },
        phone: "555-5678",
        orderHistory: [
          {
            orderId: 102,
            orderDate: "2024-02-20",
            totalAmount: 75.0,
            items: [
              {
                productId: 3,
                productName: "Keyboard",
                quantity: 1,
                price: 50.0,
              },
              {
                productId: 4,
                productName: "USB Cable",
                quantity: 2,
                price: 12.5,
              },
            ],
          },
        ],
      },
    ],
    products: [
      {
        id: 1,
        name: "Laptop",
        description: "High-performance laptop",
        price: 1000.0,
        category: "Electronics",
        stock: 50,
      },
      {
        id: 2,
        name: "Mouse",
        description: "Wireless mouse",
        price: 25.0,
        category: "Electronics",
        stock: 200,
      },
      {
        id: 3,
        name: "Keyboard",
        description: "Mechanical keyboard",
        price: 50.0,
        category: "Electronics",
        stock: 100,
      },
      {
        id: 4,
        name: "USB Cable",
        description: "USB Type-C cable",
        price: 12.5,
        category: "Accessories",
        stock: 300,
      },
    ],
    orders: [
      {
        orderId: 101,
        userId: 1,
        orderDate: "2024-01-15",
        totalAmount: 250.75,
        items: [
          {
            productId: 1,
            productName: "Laptop",
            quantity: 1,
            price: 1000.0,
          },
          {
            productId: 2,
            productName: "Mouse",
            quantity: 2,
            price: 25.0,
          },
        ],
      },
      {
        orderId: 102,
        userId: 2,
        orderDate: "2024-02-20",
        totalAmount: 75.0,
        items: [
          {
            productId: 3,
            productName: "Keyboard",
            quantity: 1,
            price: 50.0,
          },
          {
            productId: 4,
            productName: "USB Cable",
            quantity: 2,
            price: 12.5,
          },
        ],
      },
    ],
  },
];
