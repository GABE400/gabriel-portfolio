import CV from '../../assets/CV/resume.pdf';
import { HiDocumentDownload } from 'react-icons/hi';
import './header.css';

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn-button'>
        Download CV <HiDocumentDownload />
      </a>
      <a href='#contact' className='btn-button btn-primary-made'>
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
