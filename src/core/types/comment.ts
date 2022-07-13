import { Profile } from "@/core/types/profile"

export type Comment = {
  id: number
  createadAt: string
  updatedAt: string
  body: string
  author: Profile
}
