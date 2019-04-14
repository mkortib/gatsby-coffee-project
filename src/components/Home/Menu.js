import React, { Component } from 'react'
import Title from '../Globals/Title'
import Img from 'gatsby-image'


const getCategories = items => {
	let tempItems = items.map(items => {
		return items.node.category;
	})
	let tempCategories = new Set (tempItems);
	let categories = Array.from(tempCategories);
	categories = ['all', ...categories];
	return categories;
}

export default class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: props.items.edges,
			coffeeItems: props.items.edges,
			categories: getCategories(props.items.edges)
		}
	}

	handleItems = (category) => {
		let tempItems = [...this.state.items];
		if (category === 'all') {
			this.setState(() => {
				return {
					coffeeItems: tempItems
				}
			})
		} else {
			let items = tempItems.filter(({node}) => {
				return node.category === category;
			})
			this.setState(() => {
				return {
					coffeeItems: items
				}
			})
		}
	}

	render() {
		if (this.state.items.length > 0) {
			return (
				<section className="menu py-5">
					<div className="container">
						<div className="container">
							<Title title="best of our menu"/>
							{/* categoties */}
							<div className="row mb-5">
								<div className="col-10 mx-auto text-center">
									{
										this.state.categories.map((category, index) => {
											return (
												<button className="btn m-3 btn-yellow text-capitalize" type="button" key={index} onClick={() => { this.handleItems(category) } } >{category}</button>
											)
										})
									}
								</div>
							</div>
							{/* items */}
							<div className="row">
								{
									this.state.coffeeItems.map(({ node }) => {
										return (
											<div key={node.id} className="col-11 col-md-6 my-6 d-flex mx-auto">
												<div>
													<Img fixed={node.image.fixed} />
												</div>
												{/* item text */}
												<div className="flex-grow-1 px-3 w-100">
													<div className="d-flex justify-content-between">
														<h6 className="mb-0"><small>{node.title}</small></h6>
														<h6 className="mb-0 text-yellow">${node.price}</h6>
													</div>
													<p className="text-muted"><small>{node.description.description}</small></p>
												</div>
											</div>
										)
									})
								}
							</div>
						</div>
					</div>
				</section>
			)
		} else {
			return (
				<section className="menu py-5">
					<div className="container">
						<div className="row">
							<Title title="best of our menu"/>
						</div>
						<div className="row">
							<div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
								<h1>There are no items to display</h1>
							</div>
						</div>
					</div>
				</section>
			)
		}
	}
}
