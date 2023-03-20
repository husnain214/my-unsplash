const UserPage = () => {
  return (
    <>
      <header>
        <div className='container flex align-items-center justify-content-sb'>
          <div className='header-brand'></div>
          <div className='search-bar'></div>
          <button className='upload-btn'></button>
        </div>
      </header>

      <main>
        <div className='container grid justify-items-center'>
          <div className='img-container'>
            <button className='delete-btn' type='button'>Delete</button>s
            <img src='' alt='' />
            <p className='imaget-label'></p>
          </div>
        </div>
      </main>
    </>
  )
}

export default UserPage