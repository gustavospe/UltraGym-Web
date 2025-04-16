import { Quote } from "lucide-react"
import Image from "next/image"

interface TestimonialCardProps {
  content: string
  author: string
  role: string
  avatar: string
}

export default function TestimonialCard({ content, author, role, avatar }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
      <Quote className="h-8 w-8 text-orange-200 mb-4" />
      <p className="text-gray-700 mb-6">{content}</p>
      <div className="flex items-center">
        <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
          <Image src={avatar || "/placeholder.svg"} alt={author} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  )
}
