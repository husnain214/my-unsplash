import parkRainImage from '../images/park-in-rain.jpg'
import './Homepage.css'
import LoginForm from './LoginForm'

const HomePage = () => {
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

        <LoginForm />
      </main>
    </>
  )
}

export default HomePage