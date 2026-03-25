export interface IProduct{
    id?:number
    titre:string
    description:string
    imageUrl:string
    thumbnailUrl:string
    stock?:number
    prix:number
    quant?:number
    barCode?:string
}
export const emptyProduct:IProduct={
    titre:'',
    description:'',
    imageUrl:'',
    thumbnailUrl:'',
    prix:0,
    stock:0,
}