import React, {Component} from 'react';
import './App.css';
import TextInput from './TextInput/TextInput';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
    state = {
        textLength: 0,
        characters: ""
    };

    changeTextHandler = (event) => {
        this.setState({
            textLength: event.target.value.length,
            characters: event.target.value
        })
    }

    removeCharacterHandler = (characterIndex) => {
        let newCharacters = this.state.characters.split("");
        newCharacters.splice(characterIndex, 1);
        newCharacters = newCharacters.join("");
        this.setState({
            textLength: newCharacters.length,
            characters: newCharacters
        })
    }

    render() {
        const textCharacters = (
            <div>
                {
                    this.state.characters.split("").map((c, index) => {
                        return <CharComponent
                            key={index}
                            character={c}
                            remove={() => {
                                this.removeCharacterHandler(index)
                            }}
                        />;
                    })
                }
            </div>
        )

        return (
            <div className="App">
                <TextInput
                    change={(event) => {
                        this.changeTextHandler(event)
                    }}
                    characters={this.state.characters}
                    textLength={this.state.textLength}
                />
                <ValidationComponent textLength={this.state.textLength}/>
                {textCharacters}
            </div>
        );
    }
}

export default App;
