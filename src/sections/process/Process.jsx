import Card from '../../components/Card';
import data from './data';
import './process.css';

const Process = () => {
  return (
    <section id='process'>
      <div className='container process_container'>
        <h2>Work Process</h2>
        <p>I offer the right solution for your digital business</p>
        <div className='process_cards'>
          {data.map((item) => (
            <Card key={item.id} className='process_card'>
              <span className='process_card-icon'>{item.icon}</span>
              <h5>{item.title}</h5>
              <small>{item.desc}</small>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
