import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { createArticle } from '../helpers/Api';

class BackOffice extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    article: {
      title: '',
      text: '',
      day: ''
    },
    editorState: EditorState.createEmpty()
  };

  onEditorStateChange(editorState) {
    this.setState({
      editorState
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('article', this.state.article);
    console.log(
      'editor',
      draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
    );
    const { article } = this.state;

    // createArticle(article);
  }

  render() {
    return (
      <section className="section profile">
        <div className="box">
          <h1 className="title is-2">Nouvel article</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="field">
              <label className="label">Titre</label>
              <div className="control">
                <input className="input" type="text" />
              </div>
            </div>
            <div className="field">
              <label className="label">Contenu</label>
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
            <div className="field">
              <div className="control">
                <label className="radio">
                  <input type="radio" name="answer" />
                  Mercredi
                </label>
                <label className="radio">
                  <input type="radio" name="answer" />
                  Vendredi
                </label>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button className="button is-primary" type="submit">
                  Publier
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default BackOffice;
