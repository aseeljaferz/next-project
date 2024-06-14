import { useRouter } from "next/router"

const Button = () => {
  const router = useRouter();

  const handleHomePageRedirect = () => {
    router.push('/');
  }

  return (
    <div>
      <button className="btn btn-secondary mt-2" onClick={handleHomePageRedirect}>
        Home page
      </button>
    </div>
  )
}

export default Button;
