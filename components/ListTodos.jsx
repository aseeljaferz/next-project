import Link from "next/link";

const ListTodos = ({ todo, from }) => {
  console.log('from :>> ', from);
  return (
    <div className='border border-dark rounded-5 p-5 mt-5' style={{ maxWidth: '30rem', minWidth: '30rem' }}>
      <div className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center  gap-3'>
          <p className='fw-medium'>work:</p>
          <p className='border border-dark rounded p-3' style={{ minWidth: '15rem', maxWidth: '15rem' }}>{todo?.title}</p>
        </div>
        <div className='d-flex gap-3'>
          <p className='fw-medium'>id:</p>
          <p className=''>{todo?.id}</p>
        </div>
      </div>
      {(from === 'csr' || from === 'isr' || from === 'ssg') && (
        <div className='d-flex justify-content-center gap-3'>
          <p className='fw-medium'>status:</p>
          <p style={{ color: todo?.completed ? 'green' : 'red' }}>{todo?.completed?.toString()}</p>
        </div>
      )}
      {from === 'ssr' && (
        <div className="d-flex justify-content-center">
          <Link href={`/${from}/view/${todo.id}`} >
            <button className="btn btn-primary mt-2">View Todo</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ListTodos;
