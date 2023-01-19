import React, { useState, useEffect } from 'react';
import data from './data';
import Card from '../../components/Card';
import './portfolio.css';

const Portfolio = () => {
  const [category, setCategory] = useState('All');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    category === 'All'
      ? setFilteredData(data)
      : setFilteredData(data.filter((item) => item.category === category));
  }, [category]);

  return (
    <section id='portfolio'>
      <div className='container portfolio_container'>
        <h2>Projects</h2>
        <p>Check out the projects I worked on with different categories</p>
        <div className='button-wrapper' handleSetTag={setCategory}>
          <ButtonCat
            name='All'
            tagActive={category === 'All' ? true : false}
            handleSetTag={setCategory}
          />

          <ButtonCat
            name='Frontend'
            tagActive={category === 'Frontend' ? true : false}
            handleSetTag={setCategory}
          />

          <ButtonCat
            name='Backend'
            tagActive={category === 'Backend' ? true : false}
            handleSetTag={setCategory}
          />

          <ButtonCat
            name='Fullstack'
            tagActive={category === 'Fullstack' ? true : false}
            handleSetTag={setCategory}
          />

          <ButtonCat
            name='Decentralized'
            tagActive={category === 'Decentralized' ? true : false}
            handleSetTag={setCategory}
          />
        </div>

        <div className='portfolio_cards'>
          {filteredData.map((item) => (
            <Card key={item.id} className='portfolio_card'>
              <img src={item.image} alt='images' />
              <h5>{item.title}</h5>
              <h6>{item.category}</h6>
              <h6>{item.tags}</h6>
              <small>{item.desc}</small>
              <div className='btn_card_container'>
                <a
                  className='btn black'
                  href={item.source}
                  target='_blank'
                  rel='noreferrer'
                >
                  Github
                </a>
                <a
                  className='btn primary'
                  href={item.visit}
                  target='_blank'
                  rel='noreferrer'
                >
                  Live
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const ButtonCat = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`tag ${tagActive ? 'active' : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};

export default Portfolio;
