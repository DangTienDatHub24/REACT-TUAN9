import { useState } from 'react'
import DiscoverModal from './components/DiscoverModal/DiscoverModal'
import LoginModal from './components/LoginModal/LoginModal'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import SummerRecipes from './components/SummerRecipes/SummerRecipes'
import RecipesWithVideos from './components/RecipesWithVideos/RecipesWithVideos'
import EditorsPick from './components/EditorsPick/EditorsPick'
import Footer from './components/Footer/Footer'
import RecipeBox from './components/RecipeBox/RecipeBox'
import SearchResults from './components/SearchResults/SearchResults'
import Subscribe from './components/Subscribe/Subscribe'
import CookingGuide from './components/CookingGuide/CookingGuide'
import './App.css'

function App() {
  const [showDiscover, setShowDiscover] = useState(true)
  const [showLogin, setShowLogin] = useState(false)
  const [user, setUser] = useState(null)
  const [page, setPage] = useState('home')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeSearch, setActiveSearch] = useState('')

  const handleLoginSuccess = (userData) => {
    setUser(userData)
    setShowLogin(false)
  }

  const handleSearch = (q) => {
    setActiveSearch(q)
    setPage('search')
  }

  const goHome = () => {
    setPage('home')
    setSearchQuery('')
    setActiveSearch('')
  }

  // Any recipe card click → CookingGuide
  const goToCookingGuide = () => setPage('cooking')

  return (
    <>
      {showDiscover && <DiscoverModal onClose={() => setShowDiscover(false)} />}
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      <Navbar
        onLoginClick={() => setShowLogin(true)}
        user={user}
        onRecipeBoxClick={() => setPage('recipebox')}
        onLogoClick={goHome}
        onSearch={handleSearch}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSubscribeClick={() => setPage('subscribe')}
      />

      {page === 'home' && (
        <>
          <Hero onRecipeClick={goToCookingGuide} />
          <SummerRecipes onRecipeClick={goToCookingGuide} />
          <RecipesWithVideos onRecipeClick={goToCookingGuide} />
          <EditorsPick onRecipeClick={goToCookingGuide} />
          <Footer />
        </>
      )}

      {page === 'recipebox' && (
        <>
          <RecipeBox onNavigateHome={goHome} />
          <Footer />
        </>
      )}

      {page === 'search' && (
        <>
          <SearchResults query={activeSearch} onSearch={handleSearch} />
          <Footer />
        </>
      )}

      {page === 'subscribe' && (
        <>
          <Subscribe onNavigateHome={goHome} />
          <Footer />
        </>
      )}

      {page === 'cooking' && (
        <>
          <CookingGuide onNavigateHome={goHome} />
          <Footer />
        </>
      )}
    </>
  )
}

export default App
