import React from 'react';


const Count = () =>(
<section className="counting" id="Projects">
		<div className="container">
			<div className="counting-inner">
				<div className="gradient"></div>
				<div className="row text-center">
					<div className=" col-12 counting-inner-content">
						<div className="col-md-3 ">
							<div className="counter">
								<h2><span className="timer count-title count-number" data-to="2" data-speed="1500">0</span><span className="count-title">+</span></h2>
								<p className="count-text ">Years of Experience</p>
							</div>
						</div>
						<div className="col-md-3 ">
							<div className="counter">
								<h2><span className="timer count-title count-number" data-to="10" data-speed="1500">0</span><span className="count-title">+</span></h2>
								<p className="count-text ">Projects Completed</p>
							</div>
						</div>
						<div className="col-md-3 ">
							<div className="counter">
								<h2><span className="timer count-title count-number" data-to="1" data-speed="1500">0</span><span className="count-title">+</span></h2>
								<p className="count-text ">Investors Gathered</p>
							</div>
						</div>
						<div className="col-md-3 ">
							<div className="counter">
								<h2><span className="timer count-title count-number" data-to="2" data-speed="1500">0</span><span className="count-title">+</span></h2>
								<p className="count-text ">Awards Worldwide</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Count;
