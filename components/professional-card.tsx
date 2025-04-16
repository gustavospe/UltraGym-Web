import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Image from "next/image"

interface ProfessionalCardProps {
  image: string
  name: string
  role: string
  rating: number
  specialties: string[]
}

export default function ProfessionalCard({ image, name, role, rating, specialties }: ProfessionalCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative w-full aspect-square">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-gray-600 text-sm">{role}</p>

        <div className="flex items-center mt-2 mb-3">
          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          <span className="text-sm font-medium ml-1">{rating}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {specialties.map((specialty, index) => (
            <span key={index} className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
              {specialty}
            </span>
          ))}
        </div>

        <Button size="sm" variant="outline" className="w-full">
          Ver Perfil
        </Button>
      </div>
    </div>
  )
}
