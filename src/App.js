import React from 'react'
import Game from './components/Game'
import History from './components/History'
import stories from './components/data.json'

class App extends React.Component {
  state = {
    stories,
    currentStory: stories[0],
    history: []
  }

  handleSelection = option => {
    const {stories, currentStory, history} = this.state
    const currentStoryNumber = Number(currentStory.id.replace(/\D/g, ''))
    const nextStoryId = currentStoryNumber + 1 + option
    const nextStory = stories.find(s => s.id === nextStoryId)
    if (nextStory) {
      this.setState({
        history: [...history, option],
        currentStory: nextStory
      })
    } else {
      alert('Fin')
    }
  }

  render() {
    return (
      <div className="layout">
        <Game story={this.state.currentStory} onSelect={this.handleSelection} />
        <History data={this.state.history} />
      </div>
    )
  }
}

export default App
