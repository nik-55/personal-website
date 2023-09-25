/**
 * @file contains the Error component displaying an error message and a button to reset
 */

'use client';

export default function Error({ error, reset }) {
  return (
    <div className='text-center'>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button className='btn btn-secondary' onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
