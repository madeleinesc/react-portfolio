import React from 'react';

const Contact = () => {
    return (
        <div className="container p-3" id="contact" >
            <h1 className="display-6 text-center">
                Lets work together 📧.
            </h1>
            <a href="mailto: madeleine.codes@gmail.com" className="contact-link"><p className="lead italic text-center">madeleine.codes@gmail.com</p></a>
            <section className="mb-4 text-center">
            
                <a className="btn btn-outline-dark btn-floating m-1" href="https://www.linkedin.com/in/madeleine-cosway" role="button"
                ><i className="fab fa-linkedin-in"></i
                ></a>

                <a className="btn btn-outline-dark btn-floating m-1" href="https://github.com/madeleinesc" role="button"
                ><i className="fab fa-github"></i
                ></a>
            </section>
        </div>
    )
}

export default Contact