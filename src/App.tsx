import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Button } from "./components/ui/button"
import LandingPage from "./pages/LandingPage"

function DesignSystem() {
  return (
    <div className="min-h-screen p-8 bg-00">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <header className="space-y-2">
          <h1 className="text-title-4xl text-neutral-primary">
            Aperçu des Composants
          </h1>
          <p className="text-base text-neutral-secondary">
            Système de design avec Tailwind v4 et tokens CSS personnalisés
          </p>
        </header>

        {/* Typography Section */}
        <section className="space-y-4">
          <h2 className="text-title-2xl text-neutral-primary">
            Typographie
          </h2>
          <div className="space-y-3 p-6 rounded-lg bg-01">
            <p className="text-title-4xl">Title 4XL - 3.5rem</p>
            <p className="text-title-3xl">Title 3XL - 2rem</p>
            <p className="text-title-2xl">Title 2XL - 1.75rem</p>
            <p className="text-title-xl">Title XL - 1.5rem</p>
            <p className="text-title-lg">Title LG - 1.25rem</p>
            <p className="text-base-bold">Base Bold - 1.125rem</p>
            <p className="text-base">Base - 1.125rem</p>
            <p className="text-sm">Small - 1rem</p>
            <p className="text-xs">Extra Small - 0.75rem</p>
          </div>
        </section>

        {/* Colors Section */}
        <section className="space-y-4">
          <h2 className="text-title-2xl text-neutral-primary">
            Couleurs
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="h-20 rounded-lg bg-target-02"></div>
              <p className="text-xs text-neutral-secondary">Target</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 rounded-lg bg-turquoise-02"></div>
              <p className="text-xs text-neutral-secondary">Turquoise</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 rounded-lg bg-light-blue-02"></div>
              <p className="text-xs text-neutral-secondary">Light Blue</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 rounded-lg bg-green-02"></div>
              <p className="text-xs text-neutral-secondary">Green</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 rounded-lg bg-orange-02"></div>
              <p className="text-xs text-neutral-secondary">Orange</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 rounded-lg bg-purple-02"></div>
              <p className="text-xs text-neutral-secondary">Purple</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 rounded-lg bg-danger-04"></div>
              <p className="text-xs text-neutral-secondary">Danger</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 rounded-lg bg-neutral-invert-00"></div>
              <p className="text-xs text-neutral-secondary">Neutral Dark</p>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="space-y-4">
          <h2 className="text-title-2xl text-neutral-primary">
            Boutons
          </h2>
          <div className="flex flex-wrap gap-4">
            <button 
              className="px-6 py-3 rounded-lg text-base transition-colors bg-button-primary-01 text-neutral-invert-primary hover:bg-button-primary-state-01-hover"
            >
              Primary Button
            </button>
            
            <button 
              className="px-6 py-3 rounded-lg text-base transition-colors bg-button-primary-02 text-neutral-primary border-2 border-neutral-primary hover:bg-neutral-state-00-hover"
            >
              Secondary Button
            </button>

            <button 
              className="px-6 py-3 rounded-lg text-base transition-colors bg-danger-04 text-neutral-invert-primary hover:bg-danger-state-04-hover"
            >
              Danger Button
            </button>

            <button 
              className="px-6 py-3 rounded-lg text-base opacity-50 cursor-not-allowed bg-button-primary-state-01-disabled text-neutral-secondary"
              disabled
            >
              Disabled Button
            </button>
          </div>
        </section>

        {/* Shadcn Buttons Section */}
        <section className="space-y-4">
          <h2 className="text-title-2xl text-neutral-primary">
            Boutons Shadcn
          </h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-title-lg text-neutral-primary">Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="default">Default</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-title-lg text-neutral-primary">Tailles</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-title-lg text-neutral-primary">États</h3>
              <div className="flex flex-wrap gap-4">
                <Button>Enabled</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="space-y-4">
          <h2 className="text-title-2xl text-neutral-primary">
            Cartes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg space-y-3 shadow-md bg-01 border border-neutral-secondary">
              <h3 className="text-title-lg text-neutral-primary">
                Carte Standard
              </h3>
              <p className="text-sm text-neutral-secondary">
                Une carte avec bordure neutre et fond de base
              </p>
            </div>

            <div className="p-6 rounded-lg space-y-3 shadow-md bg-turquoise-00 border-2 border-highlight-primary">
              <h3 className="text-title-lg text-semantic-info-primary">
                Carte Highlight
              </h3>
              <p className="text-sm text-neutral-secondary">
                Une carte mise en avant avec bordure turquoise
              </p>
            </div>

            <div className="p-6 rounded-lg space-y-3 shadow-md bg-danger-01 border-2 border-danger-primary">
              <h3 className="text-title-lg text-semantic-danger-primary">
                Carte Danger
              </h3>
              <p className="text-sm text-neutral-secondary">
                Une carte d'avertissement avec bordure rouge
              </p>
            </div>
          </div>
        </section>

        {/* Tags Section */}
        <section className="space-y-4">
          <h2 className="text-title-2xl text-neutral-primary">
            Tags
          </h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full text-sm bg-tags-primary text-neutral-invert-primary">
              Primary Tag
            </span>
            <span className="px-4 py-2 rounded-full text-sm bg-tags-secondary text-neutral-primary">
              Secondary Tag
            </span>
            <span className="px-4 py-2 rounded-full text-sm bg-tags-danger-solid text-neutral-invert-primary">
              Danger Solid
            </span>
            <span className="px-4 py-2 rounded-full text-sm bg-tags-danger-soft text-semantic-danger-primary">
              Danger Soft
            </span>
          </div>
        </section>

        {/* Status Messages */}
        <section className="space-y-4">
          <h2 className="text-title-2xl text-neutral-primary">
            Messages de Statut
          </h2>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-green-00">
              <p className="text-base text-semantic-success-primary">
                ✓ Succès - Opération terminée avec succès
              </p>
            </div>
            <div className="p-4 rounded-lg bg-turquoise-00">
              <p className="text-base text-semantic-info-primary">
                ℹ Info - Information importante pour l'utilisateur
              </p>
            </div>
            <div className="p-4 rounded-lg bg-orange-00">
              <p className="text-base text-semantic-warning-primary">
                ⚠ Attention - Action nécessitant votre attention
              </p>
            </div>
            <div className="p-4 rounded-lg bg-danger-01">
              <p className="text-base text-semantic-danger-primary">
                ✕ Erreur - Une erreur s'est produite
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <nav className="fixed top-4 left-4 z-50 space-x-2">
        <Link to="/">
          <Button variant="secondary" size="sm">Landing</Button>
        </Link>
        <Link to="/design">
          <Button variant="secondary" size="sm">Design System</Button>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/design" element={<DesignSystem />} />
      </Routes>
    </Router>
  )
}

export default App
