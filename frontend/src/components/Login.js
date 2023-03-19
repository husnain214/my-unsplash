import parkRainImage from '../images/park-in-rain.jpg'
import './Login.css'

const Login = () => {
  return (
    /* eslint-disable */
    <>
      <main className='grid'>
        <aside>
          <img 
            className='decor-image'
            src={parkRainImage} 
            alt='park in rain' 
            decoding='async'
            role='presentation'
            fetchpriority='high'
          />
        </aside>

        <article className='grid justify-items-center align-content-center' style={{ gap: '5em' }}>
          <form action='' className='grid'>
            <p className='text-secondary-300 fs-300 fw-5400'>Welcome back</p>
            <h1 className='fs-700 fw-800 text-primary'>Login to your account</h1>

            <div className='input-wrapper grid'>
              <label htmlFor='email' className='fs-400 fw-500 text-secondary-300'>Email</label>
              <input type='email' name='email' id='email' placeholder='email' className='fs-400 fw-400 text-primary' />
            </div>

            <div className='input-wrapper grid'>
              <label htmlFor='password' className='fs-400 fw-500 text-secondary-300'>Password</label>
              <input type='password' id='password' name='password' placeholder='password' className='fs-400 fw-400 text-primary' />
            </div>

            <div className='form-features flex justify-content-sb'>
              <div className='remember flex align-items-center'>
                <input type='checkbox' className='remember-me' id='remember-me' name='remember-me'/>
                <label htmlFor='remember-me' className='fs-300 fw-300 text-primary'>Remember me</label>
              </div>

              <a href='#' className='fw-300 fs-300 text-accent-200'>Forgot password?</a>
            </div>

            <button type='submit' name='submit-btn' id='submit-btn' className='bg-accent-200 text-secondary-100 fs-400 fw-400'>Login</button>
            <button type='button' name='demo-btn' id='demo-btn' className='bg-primary text-secondary-100 fs-400 fw-400'>Demo</button>
          </form>

          <span className='text-secondary-200 fs-400 fw-500 flex'>
              Don't have an account?
              <a href='#' className='text-accent-200 fs-400 fw-400'>Join free today</a>
          </span>
        </article>
      </main>
    </>
    /* eslint-enable */
  )
}

export default Login