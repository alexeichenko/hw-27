import './App.css'
import Announce from './components/Announce'
import GradientTop from './components/GradientTop'
import LoginButton from './components/LoginButton'
import Logo from './components/Logo'
import MainContent from './components/MainContent'
import MenuButtonMobile from './components/MenuButtonMobile'
import NavDialog from './components/NavDialog'
import NavList from './components/NavList'
import Solutions from './components/Solutions'

function App() {

  return (
    <div className='bg-white'>
      <header className='absolute inset-x-0 top-0 z-50'>
        <nav className='flex justify-between items-center p-6 lg:p-8'>

          <div className='flex flex-1'>
            <Logo />
          </div>

          <div className='flex lg:hidden'>
            <MenuButtonMobile />
          </div>

          <div className='hidden lg:flex lg:gap-x-12 lg:items-center'>
            <NavList />
            <Solutions />
          </div>

          <div className='hidden lg:flex lg:flex-1 justify-end'>
            <LoginButton showIcon={true}/>
          </div>

        </nav>
        <NavDialog />
      </header>
      <main className='isolate w-full'>
        <GradientTop />
        <MainContent />
      </main>
    </div>
  )
}

export default App
