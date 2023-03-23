import parkRainImage from '../images/park-in-rain.jpg'
import './Homepage.css'
// import SignupForm from './SignupForm'
// import LoginForm from './LoginForm'

const Login = () => {
  return (
    <>
      <main className='grid'>
        <aside>
          <img 
            className='decor-image bg-secondary-300'
            src={parkRainImage} 
            alt='park in rain' 
            decoding='async'
            role='presentation'
          />
        </aside>

        <article className='grid justify-items-center align-content-center' style={{ gap: '2em' }}>
        </article>
      </main>
    </>
  )
}

export default Login