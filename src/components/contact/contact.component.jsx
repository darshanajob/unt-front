import React from 'react';


const Contact = () =>(
    <section className="contact-us" id="Contact">
    <div className="container">
        <div className="contact-us-inner">
            <div className="row">
                <div className="col-xl-4 col-lg-4 block">
                    <h3>Reach Us</h3>
                    <p>117/56, Horahena Road, Rukmale, Panipitiya</p>
                    <a href="" >untconsruction.com</a>
                    <p>Phone 0713002960</p>
                    <p>Phone 0774597663</p>
                    <a href="" >untconsruction1@gamil.com</a>
                   
                    <span>
                        <a href="">
                            <i className="fab fa-facebook-square"></i>
                        </a>
                        <a href="">
                            <i className="fab fa-twitter-square"></i>
                        </a>
                        <a href="">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="">
                            <i className="fab fa-pinterest"></i>
                        </a>
                        <a href="">
                            <i className="fab fa-google-plus"></i>
                        </a>
                        <a href="">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </span>
                </div>
                <div className="col-xl-8 col-lg-8">
                    <h4 data-aos="fade-up" data-aos-duration="1000">Get a Free Quotation</h4>
                    <form data-aos="fade-up" data-aos-duration="1300">
                        <div className="form-group row">
                            <div className="col-sm-6 col-12">
                                <input type="text" className="form-control" placeholder="Your Name" required/>
                            </div>
                            <div className="col-sm-6 col-12">
                                <input type="text" className="form-control" placeholder="Your Email" required />
                            </div>

                        </div>

                        <div className="form-group row">
                            <div className="col-sm-12">
                                <textarea type="text" className="form-control" placeholder="Your Detailed message" rows="6" required></textarea>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Get a Free Quote</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
);
export default Contact;
