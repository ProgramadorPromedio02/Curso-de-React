import '../stylesheets/Count.css'

function Count({ numClics })
{
  return (
    <div className='contador'>
      {numClics}
    </div>
  );
}

export default Count;