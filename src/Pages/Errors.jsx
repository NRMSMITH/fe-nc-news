
export const Errors = ({message}) => {

if(message === undefined) {
    message = "404 - Not Found. Please Try Again."
}

    return (
        <section className="error">
            <h2>Oops: {message}.</h2>
            <img src="https://st.depositphotos.com/1259239/2593/v/450/depositphotos_25932087-stock-illustration-newspaper-cover-page.jpg" alt="cartoon newspaper"></img>
        </section>
    )
}