import data from './data';
import Card from '../../components/Card';
import './services.css';

const Services = () => {
  return (
    <section id='services'>
      <div className='container service_container'>
        <h2>Services</h2>
        <p>I give you the best in all the services below</p>
        <div className='services_cards'>
          {data.map((item) => (
            <Card key={item.id} className='service_card'>
              <span className='service_card-icon'>{item.icon}</span>
              <h5>{item.title}</h5>
              <small>{item.desc}</small>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
