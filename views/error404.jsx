const React = require('react')
const Def = require('./default')

// Error stub function
function error404(){
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/cat-resting.jpg" alt="Cute cat looking at the camera."/>
                    <div>
                       Photo by<a href="https://unsplash.com/@danmakesgames?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Dan </a> on <a href="https://unsplash.com/s/photos/free-cute-dogs"> Unsplash </a>
                    </div>
                </div>
            </main>
        </Def>
    )

}

module.exports = error404