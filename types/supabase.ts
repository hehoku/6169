export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      user: {
        Row: {
          created_at: string | null
          email: string | null
          id: number
          password: string | null
          user_name: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id?: number
          password?: string | null
          user_name?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: number
          password?: string | null
          user_name?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
