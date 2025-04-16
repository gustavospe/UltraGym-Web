import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Como funciona o plano Start?</AccordionTrigger>
        <AccordionContent>
          O plano Start oferece um treino básico personalizado por objetivo (emagrecimento, massa muscular ou
          manutenção) e uma dieta padrão baseada no tipo de treino escolhido. Tudo isso já disponível automaticamente
          após o cadastro, para você começar imediatamente.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Posso contratar um profissional específico?</AccordionTrigger>
        <AccordionContent>
          Sim! No marketplace de serviços, você pode explorar um catálogo de especialistas como personal trainers e
          nutricionistas. Após a contratação, um chat direto é habilitado para comunicação entre você e o profissional,
          com possibilidade de filtrar por localização ou atendimento online.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Como é feito o acompanhamento do meu progresso?</AccordionTrigger>
        <AccordionContent>
          O UltraGym oferece um painel com progresso físico, metas e conquistas, além de relatórios semanais de
          desempenho. Você também recebe motivação com gamificação e desafios mensais para manter o foco nos seus
          objetivos.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Posso cancelar minha assinatura a qualquer momento?</AccordionTrigger>
        <AccordionContent>
          Sim, você pode cancelar sua assinatura a qualquer momento sem taxas adicionais. Seu acesso continuará ativo
          até o final do período já pago.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>O aplicativo funciona offline?</AccordionTrigger>
        <AccordionContent>
          Sim, parte do conteúdo como seus treinos e dietas podem ser acessados offline. No entanto, para atualizações,
          chat com profissionais e outras funcionalidades online, é necessária conexão com a internet.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
