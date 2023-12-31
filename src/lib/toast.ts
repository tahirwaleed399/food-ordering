import { toast } from "react-hot-toast"

export const toastStyle =  {
  style: {
    borderRadius: '10px',
    background: '#152340',
    color: '#fff',
  },
   
  }

  export const successToastHot = (text : string | undefined)=>{
if(text){
  toast.dismiss()
  toast.success(text  , toastStyle)
}
  }


  export const infoToastHot = (text : string | undefined)=>{
    if(text){
  toast.dismiss()

      toast.custom(text  , toastStyle)
    }
      }

  
  export const errorToastHot = (text : string | undefined)=>{
    if(text){
  toast.dismiss()

      toast.error(text  , toastStyle)
    }
      }

      
  
  export const loadingToastHot = (text : string | undefined)=>{
    if(text){
  toast.dismiss()

      toast.loading(text  , toastStyle)
    }
      }