import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class Idea extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    editorState: EditorState.createEmpty()
  };

  onEditorStateChange(editorState) {
    console.log(editorState);
    this.setState({
      editorState
    });
  }

  render() {
    return (
      <section className="section idea">
        <div className="box">
          <h1 className="title is-2">Boite à idées</h1>

          <form method="" className="">
            <div className="field">
              <label className="label">
                Soumettez des idées de sujet sur votre quartier et gagnez des
                [points Membre] si votre sujet est choisi.
              </label>
              <div className="control">
                <Editor
                  editorState={this.state.editorState}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={this.onEditorStateChange.bind(this)}
                />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-primary">Soumettre</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Idea;
