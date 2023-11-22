import { Toaster, toast } from 'sonner';

export default function App() {
  return (
    <>
      <Toaster />
    
    <button 
     onClick={() => toast('My first toast')}
     className="btn">Hello
     <span className="loading loading-spinner loading-xs"></span>
    </button>
    </>

  )
}