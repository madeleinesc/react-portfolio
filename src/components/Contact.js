import React, {useRef} from 'react';




const Contact = () => {
    return (
        <div className="container p-3" id="contact" >
            <h1 className="display-6 text-center">
                Lets work together ✌️.
            </h1>
            <p className="lead">Shoot me a message if you have any enquiries!</p>


            <form>

                <div class="mb-3">
                    <label class="form-label" for="name">Name:</label>
                    <input class="form-control" id="name" type="text" placeholder="Please enter name here..." pattern="/^[a-zA-Z]+$" required/>
                </div>

                <div class="mb-3">
                    <label class="form-label" for="emailAddress">Email Address:</label>
                    <input class="form-control" id="emailAddress" type="email" placeholder="Please enter email here..." pattern="/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/" required/>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Message:</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="Please enter message here..." required></textarea>
                </div>
                <button type="submit" class="btn btn-primary contact-btn">Send</button>
                <br />
                <br />

            </form>

            <h1 className="display-6 text-center">
                Email 📧.
            </h1>
            <p className="lead">Don't like forms? Send me an email!</p>
            <a target="_blank" href="mailto: madeleine.codes@gmail.com" className="contact-link"><p className="lead italic text-center">madeleine.codes@gmail.com</p></a>

        </div>
    )
 }

    

export default Contact