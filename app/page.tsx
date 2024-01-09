'use client';
import { useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(true); // Define a state
  const [isDefaultColor, setDefaultColor] = useState(true);

  const toggleVisibility = () => { // Define a function to toggle the state
    setIsVisible(!isVisible);
  };

  const changeBackground = () => {
    setDefaultColor(!isDefaultColor);
    const newBackgroundColor = isDefaultColor ? 'lightcoral' : 'rgb(1,77,94)';
    const newTextColor = isDefaultColor ? 'blue' : 'rgb(45, 43, 43)';

    // Update the CSS variable value
    document.documentElement.style.setProperty('--light', newBackgroundColor);
    document.documentElement.style.setProperty('--dark', newTextColor);
  };

  return (
    <div>
      <h1>This Is The Title Of My Page</h1>
      <div id="buttonContainer" className="centered">
        <button onClick={toggleVisibility}>Toggle Text visibility</button> {/* Add a button to trigger the function */}
        <button onClick={changeBackground}>Change Background color</button> {/* Add a button to trigger the function */}
      </div> 
      <div id="content">
        <div id="text-content">
          {
            isVisible && ( // Use the state to conditionally render the elements
              <>
                <p>this is the <strong>first</strong> paragph of the page</p>
                <ul>
                  <li>this is an item in a list</li>
                  <li>this is an item in a list</li>
                </ul>
                <p>This is the <em>second</em> paragraph and its under div</p>
                <p>
                  This Paragraph will be about Youtube.
                  <br />
                  This is the Youtube Logo:
                </p>
                <br />
                <img src='https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1704326400&semt=ais'
                  alt='YT logo' height={150} width={150} />
                <p>and this is a link to <a href='https://www.youtube.com/' target='_blank'>Youtube</a></p>
              </>
            )
          }
        </div>
        <div id='iframe-div'>
          <p>Here is some info about Youtube.</p>
          <iframe src="https://en.wikipedia.org/wiki/YouTube" width="500" height="300" title='youtube wiki'></iframe>
        </div>
      </div>
    </div>
  )
}
