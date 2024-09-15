import React from 'react';
import './FAQ.css';

const FAQ = () => {
  const faqData = [
    {
      title: 'Mango',
      description:
        'Mangoes are often referred to as the "king of fruits" due to their delicious taste and nutritional benefits. They are rich in vitamins A and C, which boost the immune system and promote healthy skin. Mangoes also contain antioxidants that may help reduce inflammation and protect against various diseases.',
      image: '/images/mango.jpeg', // Replace with actual image URL
    },
    {
      title: 'Strawberry',
      description:
        'Strawberries are rich in antioxidants, particularly vitamin C, which supports the immune system and skin health. These berries are also high in fiber and manganese. Regular consumption of strawberries may improve heart health, reduce inflammation, and help regulate blood sugar levels.',
      image: '/images/strawberry.jpeg', // Replace with actual image URL
    },
    {
      title: 'Orange',
      description:
        'Oranges are known for their high vitamin C content, which is essential for immune function, skin health, and iron absorption. They are also a good source of fiber, potassium, and antioxidants, all of which contribute to overall heart health and can help lower cholesterol levels.',
      image: '/images/orange.jpg', // Replace with actual image URL
    },
    {
      title: 'Pineapple',
      description:
        'Pineapples are tropical fruits that are rich in vitamins, enzymes, and antioxidants. They contain bromelain, a group of digestive enzymes that may help reduce inflammation and improve digestion. Pineapples are also high in vitamin C, which supports the immune system and skin health.',
      image: '/images/pineapple.jpeg', // Replace with actual image URL
    },
    {
      title: 'Grapes',
      description:
        'Grapes are loaded with antioxidants, especially flavonoids, which have been linked to heart health. They are also a good source of vitamins C and K, which support immune function and bone health. Consuming grapes may help reduce the risk of heart disease, certain cancers, and other chronic conditions.',
      image: '/images/grapes.jpeg', // Replace with actual image URL
    },
    {
      title: 'Watermelon',
      description:
        'Watermelons are made up of about 92% water, making them a great hydrating fruit. They are also a good source of vitamins A, B6, and C. Watermelons contain lycopene, a powerful antioxidant that has been linked to reducing the risk of heart disease and certain types of cancer.',
      image:'/images/watermellon.jpeg', // Replace with actual image URL
    },
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions about Fruits</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="faq-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
