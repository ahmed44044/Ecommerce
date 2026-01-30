import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import BottomHeader from "../header/BottomHeader";
import TopHeader from "../header/TopHeader";
import './errorPage.css'
export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
    let message = "An unexpected error occurred.";
    if (isRouteErrorResponse(error)) {
    message = error.statusText || "Something went wrong.";
  } else if (error instanceof Error) {
    message = error.message;
  }
  
  return (
    <>
        <header>
            <TopHeader/>
            <BottomHeader/>
        </header> 
       <main>
            <h1>Oops! Something went wrong..</h1>
            <p>{message}</p>
            <Link to="..">Go back to Home</Link>

        </main> 
    </>
  )
}


