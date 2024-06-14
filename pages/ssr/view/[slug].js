import axios from "axios";
import { API_URL } from "@/config";
import Link from "next/link";

const viewTodo = ({ todo }) => {

  // console.log('todo :>> ', todo);
  return (
    <div className="d-flex align-items-center justify-content-center" style={{height:'100vh'}} >
      <div className='border border-dark rounded-5 p-5 mt-5' style={{ maxWidth: '30rem', minWidth: '30rem' }}>
        <div className='d-flex justify-content-between align-items-center'>
          {/* <div className='d-flex align-items-center gap-3'> */}
            <p className='fw-medium'>work:</p>
            <p className='border border-dark rounded p-3' style={{ minWidth: '20rem', maxWidth: '20rem' }}>{todo?.title}</p>
          {/* </div> */}
        </div>
        <div className='d-flex justify-content-center gap-3'>
          <p className='fw-medium'>status:</p>
          <p className='' style={{ maxWidth: '10rem', color: todo?.completed ? 'green' : 'red' }}>{todo?.completed?.toString()}</p>
        </div>
        <div>
          <Link href='/ssr'>
            <div>
              {'<'} Go Back
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async ({ params: { slug } }) => {
  const res = await axios.get(`${API_URL}/${slug}`);
  const todo = res?.data;

  return {
    props: {
      todo
    }
  }
}

export default viewTodo
