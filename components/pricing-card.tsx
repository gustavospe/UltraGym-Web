import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  buttonText: string
  popular?: boolean
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  popular = false,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border p-6 shadow-sm relative flex flex-col",
        popular ? "border-orange-600 shadow-md" : "border-gray-200",
      )}
    >
      {popular && (
        <div className="absolute -top-3 left-0 right-0 mx-auto w-fit px-3 py-1 text-xs font-medium bg-orange-600 text-white rounded-full">
          Mais Popular
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-3xl font-bold">R$ {price}</span>
          <span className="text-sm text-gray-500 ml-1">/mês</span>
        </div>
      </div>

      <ul className="space-y-3 mb-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-orange-600 mr-2 shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        className={cn("mt-auto", popular ? "bg-orange-600 hover:bg-orange-700" : "")}
        variant={popular ? "default" : "outline"}
      >
        {buttonText}
      </Button>
    </div>
  )
}
