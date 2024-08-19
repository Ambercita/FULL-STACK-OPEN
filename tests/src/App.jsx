import { useState } from "react";

const App = () => {
  const [clicks, SetClicks] = useState( 
    {left: 0, right: 0}
  )

  const handleLeftClick = () => SetClicks({
      ...clicks,
      left: clicks.left + 1,
    })
    

  const handleRightClicks = () => SetClicks({
    ...clicks,
    right: clicks.right + 1})

  return (
    <div>
      {clicks. left}
      <button onClick={handleLeftClick}>
      left
      </button>
      <button onClick={handleRightClicks}>right</button>
      {clicks.right}
    </div>
  )
}

export default App;
