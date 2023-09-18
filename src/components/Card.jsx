import Link from 'next/link';

const Card = ({
  title,
  subtitle,
  description,
  external,
  endpoint,
  linkText,
}) => {
  description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo.';
  return (
    <div
      className='card text-bg-light'
      style={{ width: '100%', height: '14rem' }}
    >
      <div className='card-header'>
        <h5 className='card-title'>{title}</h5>
        {subtitle && (
          <h6 className='card-subtitle text-body-secondary'>{subtitle}</h6>
        )}
      </div>
      <div className='card-body' style={{ overflowY: 'scroll' }}>
        <p className='card-text'>{description}</p>
      </div>

      <div className='card-footer'>
        {external ? (
          <Link className='card-link' target={'_blank'} href={external}>
            {linkText || 'Read more'}
          </Link>
        ) : (
          <Link className='card-link' href={endpoint}>
            {linkText || 'Read more'}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
