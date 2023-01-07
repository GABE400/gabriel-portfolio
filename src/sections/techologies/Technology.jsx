import Card from '../../components/Card';
import data from './data';
import './technology.css';

const Technology = () => {
  return (
    <section id='tech'>
      <div className='container tech_container'>
        <h2>Skills | Technologies Experienced In</h2>
        <div className='tech_cards'>
          {data.map((item) => (
            <Card key={item.id} className='tech_card'>
              <span className='tech_card-icon'>{item.icon}</span>
              <h5>{item.title}</h5>
              <small>{item.desc}</small>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
