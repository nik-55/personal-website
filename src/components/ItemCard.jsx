import Link from 'next/link';

const ItemCard = ({
  title,
  subtitle,
  description,
  external,
  endpoint,
  linkText,
}) => {
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
      <div className='card-body' style={{ overflowY: 'auto' }}>
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

export default ItemCard;
