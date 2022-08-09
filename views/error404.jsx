const React = require('react')
const Default = require('./default')

function error404() {
	return (
		<Default>
			<main>
				<h2>404: Page not found</h2>
				<p>Whoops, sorry! We couldn't find that page!</p>
				<div>
                <img src="/images/cat-resting.jpg" alt="Cute cat looking at the camera."/>
                    <div className='credit'>
                       Photo by<a href="https://unsplash.com/@danmakesgames?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Dan </a> on <a href="https://unsplash.com/s/photos/free-cute-dogs"> Unsplash </a>
					</div>
				</div>
				<hr />
				<a href="/"><button className='btn-primary'>Home</button></a>
			</main>
		</Default>
	)
}

module.exports = error404