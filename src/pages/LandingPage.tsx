import { Button } from "../components/ui/button"
import { Sparkles, Zap, Code, Rocket, Heart, Github } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-00">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-turquoise-00 to-00 px-6 py-24 md:py-32">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tags-secondary text-neutral-primary text-sm">
            <Sparkles className="w-4 h-4" />
            <span>L'avenir du développement web</span>
          </div>
          
          <h1 className="text-title-4xl md:text-[5rem] md:leading-tight text-neutral-primary font-bold">
            Créez des applications web
            <span className="block text-semantic-info-primary">en quelques minutes</span>
          </h1>
          
          <p className="text-lg md:text-title-xl text-neutral-secondary max-w-3xl mx-auto">
            Lovable transforme vos idées en applications React professionnelles. 
            Pas de configuration complexe, juste votre créativité et notre IA.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group">
              Commencer gratuitement
              <Rocket className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              <Github className="mr-2 w-5 h-5" />
              Voir sur GitHub
            </Button>
          </div>
          
          <div className="pt-8 text-sm text-neutral-secondary">
            ✨ Aucune carte bancaire requise · 🚀 Déploiement en un clic
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-title-3xl text-neutral-primary font-bold">
              Pourquoi choisir Lovable ?
            </h2>
            <p className="text-lg text-neutral-secondary max-w-2xl mx-auto">
              Des outils puissants qui accélèrent votre développement
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-lg bg-01 border-2 border-highlight-primary shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-turquoise-02 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-neutral-invert-primary" />
              </div>
              <h3 className="text-title-xl text-neutral-primary font-bold mb-3">
                Ultra-rapide
              </h3>
              <p className="text-base text-neutral-secondary">
                Passez de l'idée au prototype en minutes. Notre IA génère du code React optimisé instantanément.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-lg bg-01 border-2 border-highlight-primary shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-purple-02 flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-neutral-invert-primary" />
              </div>
              <h3 className="text-title-xl text-neutral-primary font-bold mb-3">
                Code de qualité
              </h3>
              <p className="text-base text-neutral-secondary">
                React, TypeScript, Tailwind CSS. Des technologies modernes avec les meilleures pratiques intégrées.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-lg bg-01 border-2 border-highlight-primary shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-target-02 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-neutral-invert-primary" />
              </div>
              <h3 className="text-title-xl text-neutral-primary font-bold mb-3">
                Simple d'utilisation
              </h3>
              <p className="text-base text-neutral-secondary">
                Interface intuitive, modifications en temps réel. Pas besoin d'être développeur pour commencer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-20 bg-01">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-title-4xl text-semantic-info-primary font-bold">10k+</div>
              <div className="text-base text-neutral-secondary">Applications créées</div>
            </div>
            <div className="space-y-2">
              <div className="text-title-4xl text-semantic-info-primary font-bold">50k+</div>
              <div className="text-base text-neutral-secondary">Développeurs satisfaits</div>
            </div>
            <div className="space-y-2">
              <div className="text-title-4xl text-semantic-info-primary font-bold">99.9%</div>
              <div className="text-base text-neutral-secondary">Uptime garanti</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-title-3xl md:text-title-4xl text-neutral-primary font-bold">
            Prêt à créer votre prochaine application ?
          </h2>
          <p className="text-lg text-neutral-secondary">
            Rejoignez des milliers de développeurs qui transforment leurs idées en réalité
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Commencer maintenant
              <Rocket className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Voir la documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-neutral-invert-00 text-neutral-invert-primary">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <div className="text-title-xl font-bold">Lovable</div>
          <p className="text-sm text-neutral-invert-secondary">
            Créez des applications web exceptionnelles sans effort
          </p>
          <div className="pt-6 text-xs text-neutral-invert-secondary">
            © 2025 Lovable. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  )
}
