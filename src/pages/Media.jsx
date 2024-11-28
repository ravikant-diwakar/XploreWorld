import React, { useState } from 'react';
import styles from './media.module.css';
import PageNav from '../components/PageNav';

export default function Media() {
  const [activeFilter, setActiveFilter] = useState('all');

  const mediaItems = [
    {
      type: 'image',
      category: 'destinations',
      url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da',
      title: 'Taj Mahal, Agra',
      description: 'Symbol of eternal love and architectural marvel',
    },
    {
      type: 'image',
      category: 'culture',
      url: 'https://www.savaari.com/blog/wp-content/uploads/2023/09/Varanasi_ghats1.webp',
      title: 'Varanasi Ghats',
      description: 'Spiritual heart of India',
    },
    {
      type: 'image',
      category: 'destinations',
      url: 'https://images.unsplash.com/photo-1477587458883-47145ed94245',
      title: 'Hawa Mahal, Jaipur',
      description: "Pink City's architectural wonder",
    },
    {
      type: 'image',
      category: 'experiences',
      url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa',
      title: 'Kerala Backwaters',
      description: 'Serene houseboat experiences',
    },
    {
      type: 'image',
      category: 'culture',
      url: 'https://vijayindiatours.com/wp-content/uploads/2023/11/Pushkar-Mela.jpg',
      title: 'Pushkar Fair',
      description: 'Vibrant Rajasthani culture',
    },
    {
      type: 'image',
      category: 'experiences',
      url: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3',
      title: 'Himalayan Trek',
      description: 'Adventure in the mountains',
    },
    {
      type: 'image',
      category: 'destinations',
      url: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073',
      title: 'Golden Temple, Amritsar',
      description: 'Spiritual sanctuary of Sikhism',
    },
    {
      type: 'image',
      category: 'culture',
      url: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c',
      title: 'Kathakali Dance',
      description: 'Traditional Kerala art form',
    },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? mediaItems
      : mediaItems.filter((item) => item.category === activeFilter);

  return (
    <div className={styles.media}>
      <PageNav />
      <div className={styles.hero}>
        <h1>Incredible India</h1>
        <p>Discover the magic and diversity of Indian travel</p>
      </div>
      <div className={styles.filters}>
        {['all', 'destinations', 'experiences', 'culture'].map((filter) => (
          <button
            key={filter}
            className={`${styles.filterButton} ${
              activeFilter === filter ? styles.active : ''
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>
      <div className={styles.grid}>
        {filteredItems.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                src={item.url}
                alt={item.title}
                className={styles.image}
                loading="lazy"
              />
              <div className={styles.overlay}>
                <span className={styles.category}>{item.category}</span>
              </div>
            </div>
            <div className={styles.info}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
