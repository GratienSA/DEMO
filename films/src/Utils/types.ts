export type ButtonProps = {
    name: string
    additionalCss: string
    functionToPlay: any
  }
  
  export type paramsProps = {
    params: {
      id: string
    }
  }
  
  export type Cardprops = {
    name: string
    image: string
    job: string
    additionalCss?: string
  }
  
  export type CardsProps = {
    children: React.ReactNode
    title: string
  }
  
  export type ButtonsProps = {
    name: string
    // il est possible de mettre un paramètre en facultatif, pour cela il faut ajouter un ? après son nom
    additionalCss?: string
    children: React.ReactNode
  }