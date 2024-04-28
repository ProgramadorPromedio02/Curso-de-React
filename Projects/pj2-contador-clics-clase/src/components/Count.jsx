import React from 'react';
import '../stylesheets/Count.css'

class Count extends React.Component
{
  render()
  {
    return (
      <div className='contador'>
        {this.props.numClics}
      </div>
    );
  }
};

// function Count({ numClics })
// {

// }

export default Count;