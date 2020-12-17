import React from 'react';

//import logo from './images/ULOG.png';
var styles1 = {

	width:500,
	 height:265

  };

const Portfolio = () =>(
	<section class="services-carousel">
		<div class="container">
			<div class="row">
				<div class="col-12 owl-services">
					<div class="loop owl-carousel  owl-test nogap">
						<div class="item">
							<div class="slide">
								<figure>
									<img src="images/a.jpg" alt="construction"  style={styles1} class="img-fluid  people"/>
									<figcaption class="owl-services-content">
										<h4><a href="">Architectural Service</a></h4>
										<p> Architectural services include design, preparation of construction documents, and construction administration. Architects also provide a wide variety of services including feasibility studies, architectural programming and project management.</p>
									</figcaption>
								</figure>
							</div>
						</div>
						<div class="item">
							<div class="slide">
								<figure>
									<img src="images/h.jpeg" alt="construction" style={styles1} class="img-fluid  people"/>
									<figcaption class="owl-services-content">
										<h4><a href="">House Building Planning</a></h4>
										<p> We will work with you to make small or large changes so you get the house of your dreams, You can purchase a cost to build report for any plan</p>
									</figcaption>
								</figure>
							</div>
						</div>
						<div class="item">
							<div class="slide">
								<figure>
									<img src="images/q.jpg" alt="construction" style={styles1} class="img-fluid  people"/>
									<figcaption class="owl-services-content">
										<h4><a href="">Quantity Surveying</a></h4>
										<p> Professional Chartered Quantity Surveying Practice which provides a full range of comprehensive and competitive Quantity Surveying, Construction Cost Consultancy and Estimating / Tendering Services to the Construction Industry.</p>
									</figcaption>
								</figure>
							</div>
						</div>
						<div class="item">
							<div class="slide">
								<figure>
									<img src="images/c.jpg" alt="construction" style={styles1} class="img-fluid  people"/>
									<figcaption class="owl-services-content">
										<h4><a href="">Civil Engineering Construction</a></h4>
										<p> We provide civil engineering design and construction services to all industries. UNT Consruction offers tailored services ably supported by experienced civil engineers. </p>
									</figcaption>
								</figure>
							</div>
						</div>
						<div class="item">
							<div class="slide">
								<figure>
									<img src="images/l.jpg" alt="construction" style={styles1} class="img-fluid  people"/>
									<figcaption class="owl-services-content">
										<h4><a href="">Landscape </a></h4>
										<p> Brightview brings a wide diversity of skilled professionals, from stonemasons to horticulturists, project managers to landscape technicians—each with specialized knowledge and extensive landscape development experience. </p>
									</figcaption>
								</figure>
							</div>
						</div>
						

						<div class="item">
							<div class="slide">
								<figure>
									<img src="images/ep.jpg" alt="construction" style={styles1} class="img-fluid  people"/>
									<figcaption class="owl-services-content">
										<h4><a href="">Electrical Mechanical Plumbing Services </a></h4>
										<p> No matter how complex your building or its mechanical and electrical needs, our team of engineers are qualified to deliver. From large planned preventative maintenance and repair contracts to tailored services that provide an optimised working environment. </p>
									</figcaption>
								</figure>
							</div>
						</div>

						<div class="item">
							<div class="slide">
								<figure>
									<img src="images/ar.jpg" alt="construction" style={styles1} class="img-fluid  people"/>
									<figcaption class="owl-services-content">
										<h4><a href="">Asphalt Road Construction  </a></h4>
										<p> Whether it was highways or rural roads, our technical expertise and project management experience have guaranteed the successful completion of futuristic and highly durable challenging road construction projects. As a C1 rated contractor for road construction, we have gained a reputation for high-quality work and timely execution of projects. </p>
									</figcaption>
								</figure>
							</div>
						</div>
						
						<div class="item">
							<div class="slide">
								<figure>
									<img src="images/int.jpg" alt="construction" style={styles1} class="img-fluid  people"/>
									<figcaption class="owl-services-content">
										<h4><a href="">Interior Design  </a></h4>
										<p> We are one of the best interior design & build company in Sri Lanka for luxury interior solutions for corporates & residencies. As a leading interior design company, we provide an array of interior design solutions for both residential and commercial interior projects. </p>
									</figcaption>
								</figure>
							</div>
						</div>
						<div class="item">
							<div class="slide">
								<figure>
									<img src="images/pop.jpg" alt="construction" style={styles1} class="img-fluid  people"/>
									<figcaption class="owl-services-content">
										<h4><a href="">Sewer / Water Pipe laying  </a></h4>
										<p> Our team is specialized in pipe installation and repair of dewatering, transfer, feed water pumps, boiler water treatment systems, installation Ductile Iron Pipes.. We provide service to, commercial, municipal, industrial & domestic purposes. </p>
									</figcaption>
								</figure>
							</div>
						</div>

					</div>

				</div>
			</div>
		</div>
	</section>
);

export default Portfolio;
