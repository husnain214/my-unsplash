const Image = () => {
  return (
    <article>
      <img src='https://images.pexels.com/photos/9902397/pexels-photo-9902397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
      
      <div className='image-overlay grid align-content-sb'>
        <button className='delete-btn align-self-start justify-self-end fw-500 text-accent-200 fs-200' type='button'>Delete</button>
        <p className='image-label align-self-end fw-700 text-secondary-100 fs-500'>aaaaaaaaaaaaaaaaa</p>
      </div>
    </article>
  )
}

export default Image