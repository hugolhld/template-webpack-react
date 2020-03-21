import React, { Component } from "react";
import ReactDOM from "react-dom";

function Thread(props)
    {
      const [userVote, setUserVote] = React.useState(0)
      React.useEffect(() => {
        console.log('hello')
      }, [userVote])
      const upVote = () =>
      {
        if(userVote === 1)
        {
          setUserVote(0)
        }
        else
        {
          setUserVote(1)
        }
      }
      const downVote = () =>
      {
        if(userVote === -1)
        {
          setUserVote(0)
        }
        else
        {
          setUserVote(-1)
        }
      }
      return(
        <li className="thread">
        <div className="thread__actions">
          <button className={`thread__button js-upvote ${userVote === 1 ? 'active' : ' '}` } onClick={upVote}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512.171 512.171"
              style={{ enableBackgroundNew: "0 0 512.171 512.171" }}
              xmlSpace="preserve"
              className="thread__button-icon thread__button-icon--reversed"
            >
              <g>
                <path
                  d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971
			c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627
			l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504
			C479.793,292.501,480.71,287.915,479.046,283.925z"
                />
              </g>
            </svg>
          </button>

          <span className="thread__upvotes-count js-vote-count">{props.score+userVote}</span>

          <button className= {`thread__button js-downvote ${userVote === -1 ? 'active' : ''} `} onClick={downVote}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512.171 512.171"
              style={{ enableBackgroundNew: "0 0 512.171 512.171" }}
              xmlSpace="preserve"
              className="thread__button-icon"
            >
              <g>
                <path
                  d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971
			c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627
			l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504
			C479.793,292.501,480.71,287.915,479.046,283.925z"
                />
              </g>
            </svg>
          </button>
        </div>

        <div className="thread__content">
          <span className="thread__author">
            {props.author}
            <b className="thread__author-stats">{props.points} points</b>
          </span>
          <h3 className="thread__title">
            {props.title}
          </h3>
          <p className="thread__body">
            {props.description}
          </p>
        </div>
      </li>

      
      )
    }

const app = (
    <main>
      <ul className="threads">
        <Thread 
          title="Hello"
          author="hugo"
          points="14.5k"
          score={230}
          description="Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum "
        />
      </ul>
    </main>
 );


ReactDOM.render(app, document.querySelector("#container"));
