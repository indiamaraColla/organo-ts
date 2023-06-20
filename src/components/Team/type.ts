export interface ListProps {
  position: string
  name: string
  image: string
}

export interface TeamProps {
  secondary: string
  primary: string
  name: string
  collaborators: ListProps[]
}
