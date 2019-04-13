import React from 'react'
import { Link } from 'gatsby'
import Title from '../Globals/Title'

export default function Info() {
	return (
		<section className="py-5">
			<div className="container">
			<Title title="our story"></Title>
				<div className="row">
					<div className="col-10 col-sm-8 mx-auto text-center">
						<p className="lead text-muted mb-5">Quia quaerat, distinctio dolores eligendi cumque eius? Obcaecati praesentium labore fuga, nam magnam voluptate ipsam quasi consequatur, sit enim reiciendis rerum eius asperiores consequuntur aspernatur maxime recusandae quia. Eos, eius officiis repellat, voluptates ipsam assumenda eveniet, sequi vitae dolore rem provident laudantium saepe molestiae! Eaque modi sint totam quam.</p>
						<Link to="/about/">
							<button className="btn text-uppercase btn-yellow">about page</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}
