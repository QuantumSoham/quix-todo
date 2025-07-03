import React from 'react'

const HeadingComp = ({first,second}) => {
  return (
    <div><h1 className="sign-up-heading text-center">
              {first}
              <br />
              {second}
            </h1></div>
  )
}

export default HeadingComp