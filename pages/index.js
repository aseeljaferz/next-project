import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div className="contsiner d-flex">
          <div className="d-flex flex-column gap-5 justify-content-center">
            <h1 className="text-center mt-5">Next Accessment</h1>
            <div className="d-flex flex-column gap-5" style={{width:'100vw', marginTop:'4rem'}}>
              <div className="d-flex justify-content-evenly">
                <div className="border border-dark rounded-5 p-5" style={{minWidth:'30rem'}}>
                  <h4>Server Side Rendering</h4>
                  <div className="d-flex justify-content-center" style={{ marginTop: '20px' }}>
                    <Link href='/ssr'>
                      <div className="btn btn-dark">Details</div>
                    </Link>
                  </div>
                </div>
                <div className="border border-dark rounded-5 p-5" style={{minWidth:'30rem'}}>
                  <h4>Static Site Generation</h4>
                  <div className="d-flex justify-content-center" style={{ marginTop: '20px' }}>
                    <Link href='/staticsitegeneration'>
                      <div className="btn btn-dark">Details</div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-evenly">
                <div className="border border-dark rounded-5 p-5" style={{minWidth:'30rem'}}>
                  <h4>Client Side Rendering</h4>
                  <div className="d-flex justify-content-center" style={{ marginTop: '20px' }}>
                    <Link href='/clientsiderendering'>
                      <div className="btn btn-dark">Details</div>
                    </Link>
                  </div>
                </div>
                <div className="border border-dark rounded-5 p-5" style={{minWidth:'30rem'}}>
                  <h4>Incremental Static Regeneration</h4>
                  <div className="d-flex justify-content-center" style={{ marginTop: '20px' }}>
                    <Link href='/incrementalsiteregeneration'>
                      <div className="btn btn-dark">Details</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
