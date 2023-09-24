import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex h-screen justify-center items-center flex-col">
            <h1 className="text-3xl font-bold">Oops!!</h1>
            <Link to="/">
                <button className="btn btn-accent text-2xl font-semibold my-5">Go Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;