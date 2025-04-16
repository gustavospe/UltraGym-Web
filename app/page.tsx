import { Button } from "@/components/ui/button"
import { ChevronRight, Dumbbell, Users, Apple, Salad, Calendar, MessageSquare, BarChart3 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import FeatureCard from "@/components/feature-card"
import PricingCard from "@/components/pricing-card"
import TestimonialCard from "@/components/testimonial-card"
import ProfessionalCard from "@/components/professional-card"
import { FaqAccordion } from "@/components/faq-accordion"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Dumbbell className="h-6 w-6 text-orange-600" />
            <span>UltraGym</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-orange-600 transition-colors">
              Funcionalidades
            </Link>
            <Link href="#plans" className="text-sm font-medium hover:text-orange-600 transition-colors">
              Planos
            </Link>
            <Link href="#professionals" className="text-sm font-medium hover:text-orange-600 transition-colors">
              Profissionais
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-orange-600 transition-colors">
              Depoimentos
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-orange-600 transition-colors">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Entrar
            </Button>
            <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
              Começar Agora
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-white to-orange-50">
          <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Treinos, Saúde e Profissionais na Palma da Sua Mão
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                O UltraGym une personalização, praticidade e conexão com profissionais da saúde para ajudar você a
                alcançar seus objetivos fitness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Começar Agora
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Conhecer Planos
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative w-full aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="UltraGym App"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-8 w-8 text-orange-600" />
                  <div>
                    <p className="text-sm font-medium">Progresso Semanal</p>
                    <p className="text-orange-600 font-bold">+15% 🔥</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Principais Funcionalidades</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Tudo o que você precisa para transformar seu corpo e sua saúde em um só lugar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Dumbbell className="h-10 w-10 text-orange-600" />}
                title="Plano Start"
                description="Treino básico personalizado e dieta padrão baseada no seu objetivo, disponíveis imediatamente após o cadastro."
              />
              <FeatureCard
                icon={<Users className="h-10 w-10 text-orange-600" />}
                title="Evolução com Profissionais"
                description="Contrate personal trainers e nutricionistas para um acompanhamento mais profundo e personalizado."
              />
              <FeatureCard
                icon={<Salad className="h-10 w-10 text-orange-600" />}
                title="Dieta Personalizada"
                description="Planos alimentares adaptados à sua rotina, com sugestões e alertas diários para manter você no caminho certo."
              />
              <FeatureCard
                icon={<MessageSquare className="h-10 w-10 text-orange-600" />}
                title="Marketplace de Profissionais"
                description="Explore um catálogo de especialistas e contrate serviços personalizados com comunicação direta."
              />
              <FeatureCard
                icon={<Calendar className="h-10 w-10 text-orange-600" />}
                title="Experiência de Treino Interativa"
                description="Exercícios com vídeos explicativos, registro de cargas e histórico de treino automático."
              />
              <FeatureCard
                icon={<BarChart3 className="h-10 w-10 text-orange-600" />}
                title="Acompanhamento e Resultados"
                description="Painel com progresso físico, metas, conquistas e relatórios semanais de desempenho."
              />
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section id="plans" className="py-20 bg-orange-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Escolha Seu Plano</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comece com o plano básico e evolua conforme suas necessidades.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <PricingCard
                title="Start"
                price="29,90"
                description="Ideal para quem está começando"
                features={[
                  "Treino básico personalizado",
                  "Dieta padrão por objetivo",
                  "Vídeos explicativos",
                  "Registro de progresso",
                  "Comunidade básica",
                ]}
                buttonText="Começar Agora"
                popular={false}
              />
              <PricingCard
                title="Premium"
                price="59,90"
                description="Para quem busca resultados mais rápidos"
                features={[
                  "Tudo do plano Start",
                  "Treinos avançados",
                  "Dieta personalizada",
                  "Chat com suporte",
                  "Desafios exclusivos",
                  "Relatórios detalhados",
                ]}
                buttonText="Escolher Premium"
                popular={true}
              />
              <PricingCard
                title="Pro"
                price="99,90"
                description="Acompanhamento profissional completo"
                features={[
                  "Tudo do plano Premium",
                  "1 sessão mensal com Personal",
                  "1 consulta mensal com Nutricionista",
                  "Planos totalmente personalizados",
                  "Prioridade no suporte",
                  "Acesso a conteúdo exclusivo",
                ]}
                buttonText="Escolher Pro"
                popular={false}
              />
            </div>
          </div>
        </section>

        {/* Professionals Section */}
        <section id="professionals" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Marketplace de Profissionais</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Conecte-se com os melhores especialistas em fitness e nutrição.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ProfessionalCard
                image="/placeholder.svg?height=300&width=300"
                name="Carlos Silva"
                role="Personal Trainer"
                rating={4.9}
                specialties={["Hipertrofia", "Funcional"]}
              />
              <ProfessionalCard
                image="/placeholder.svg?height=300&width=300"
                name="Ana Oliveira"
                role="Nutricionista"
                rating={4.8}
                specialties={["Emagrecimento", "Dieta Low Carb"]}
              />
              <ProfessionalCard
                image="/placeholder.svg?height=300&width=300"
                name="Marcos Santos"
                role="Personal Trainer"
                rating={4.7}
                specialties={["Crossfit", "Reabilitação"]}
              />
              <ProfessionalCard
                image="/placeholder.svg?height=300&width=300"
                name="Juliana Costa"
                role="Nutricionista"
                rating={4.9}
                specialties={["Nutrição Esportiva", "Vegana"]}
              />
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" variant="outline">
                Ver Todos os Profissionais
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-orange-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Nossos Usuários Dizem</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Histórias reais de pessoas que transformaram suas vidas com o UltraGym.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard
                content="Perdi 15kg em 6 meses seguindo o plano alimentar e os treinos do app. A possibilidade de falar diretamente com um nutricionista fez toda a diferença!"
                author="Mariana Lima"
                role="Usuária há 8 meses"
                avatar="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                content="Como personal trainer, o UltraGym me ajudou a expandir minha base de clientes e a oferecer um serviço mais completo, com acompanhamento contínuo."
                author="Rafael Mendes"
                role="Personal Trainer"
                avatar="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                content="Ganhei 8kg de massa muscular em 4 meses com o plano Premium. Os vídeos explicativos e o acompanhamento do meu progresso foram essenciais."
                author="Pedro Alves"
                role="Usuário há 5 meses"
                avatar="/placeholder.svg?height=100&width=100"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Tire suas dúvidas sobre o UltraGym.</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <FaqAccordion />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-orange-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Transformar seu Corpo?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Comece hoje mesmo com o UltraGym e tenha acesso a treinos, dietas e profissionais qualificados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-orange-600 hover:bg-gray-100">
                Baixar o App
                <Apple className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-orange-700">
                Conhecer Planos
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl text-white mb-4">
                <Dumbbell className="h-6 w-6 text-orange-500" />
                <span>UltraGym</span>
              </div>
              <p className="text-sm">Treinos, Saúde e Profissionais na Palma da Sua Mão.</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#features" className="hover:text-orange-500 transition-colors">
                    Funcionalidades
                  </Link>
                </li>
                <li>
                  <Link href="#plans" className="hover:text-orange-500 transition-colors">
                    Planos
                  </Link>
                </li>
                <li>
                  <Link href="#professionals" className="hover:text-orange-500 transition-colors">
                    Profissionais
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="hover:text-orange-500 transition-colors">
                    Depoimentos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Empresa</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Carreiras
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} UltraGym. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
