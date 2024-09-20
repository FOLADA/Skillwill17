import './ErrorPage.css';
const ErrorPage = () => { 

    return (
        <div className="error-page">
          <div className="error-content">
            <h1 className="error-title">Oops! Fact Not Found.</h1>
            <p className="error-message">
              It seems like the fact you're looking for doesn't exist. Maybe it's hidden deep in the magical archives, or perhaps it never existed at all!
            </p>
          </div>
        </div>
    )
}
export default ErrorPage