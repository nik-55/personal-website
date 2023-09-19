import Link from 'next/link';

const ItemCard = ({ title, description, external, endpoint, linkText }) => {
  return (
    <div
      className='card itemcard border-dark'
      style={{ width: '100%', height: '14rem' }}
    >
      <div className='card-header'>
        <h5 className='card-title'>{title}</h5>
      </div>
      <div className='card-body' style={{ overflowY: 'auto' }}>
        <p className='card-text'>{description}</p>
      </div>

      <div className='card-footer'>
        {external ? (
          <Link
            className='btn btn-outline-info btn-sm'
            target={'_blank'}
            href={external}
          >
            {linkText || 'Read more'}
          </Link>
        ) : (
          <Link className='btn btn-outline-info btn-sm' href={endpoint}>
            {linkText || 'Read more'}
          </Link>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
