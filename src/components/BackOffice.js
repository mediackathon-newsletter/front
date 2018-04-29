import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { createArticle, fetchNewsletters } from '../helpers/Api';
import axios from 'axios';

class BackOffice extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    article: {
      newsletterId: '',
      categoryId: '',
      userId: '',
      title: '',
      subtitle: '',
      text: ''
    },
    focus: false,
    cities: [],
    categories: [],
    districts: [],
    selectedCity: {},
    selectedDisctict: {},
    selectedCategory: {},
    selectedNL: {},
    editorState: EditorState.createEmpty()
  };

  fetchCities() {
    axios
      .get('http://localhost:4000/cities')
      .then(({ data }) => this.setState({ cities: data }));
  }

  fetchCategories() {
    axios
      .get('http://localhost:4000/categories')
      .then(({ data }) => this.setState({ categories: data }));
  }

  componentDidMount() {
    this.fetchCities();
    this.fetchCategories();
  }

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
    article.text = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));

    createArticle(article)
  }

  renderDistrict() {
    const city = this.state.cities.find(
      c => c.id === parseInt(this.state.selectedCity)
    );

    if (!city || !city.districts) {
      return <div />;
    }

    return (
      <div className="field">
        <label className="label">Quartier</label>
        <div className="control">
          <div className="select">
            <select
              value={this.state.selectedDisctict}
              onChange={e =>
                this.setState({ selectedDisctict: e.target.value })
              }
            >
              {city.districts.map(district => (
                <option key={district.id} value={district.id}>
                  {district.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  }

  renderNewsletters() {
    const city = this.state.cities.find(
      c => c.id === parseInt(this.state.selectedCity)
    );
    const district = this.state.districts.find(
      d => d.id === parseInt(this.state.selectedDisctrict)
    );

    if (!city || !district) {
      return <div />;
    }

    const newsletters = fetchNewsletters(city, district);
    return (
      <div className="field">
        <label className="label">Newsletter</label>
        <div className="control">
          <div className="select">
            <select
              value={this.state.selectedNL}
              onChange={e =>
                this.setState({ selectedNL: e.target.value })
              }
            >
              {newsletters.map(newsletter => (
                <option key={newsletter.id} value={newsletter.id}>
                  {newsletter.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  }

  renderSubtitle() {
    return (
      <div className="field">
        <label className="label">Sous-titre</label>
        <div className="control">
          <input
            className="input"
            type="text"
            onChange= {e =>
              this.setState({
                article: { ...this.state.article, subtitle: e.target.value}
              })
            }
          />
        </div>
      </div>
    );
  }

  render() {
    return (
      <section className="section profile">
        <div className="box">
          <h1 className="title is-2">Nouvel article</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="field">
              <label className="label">Ville</label>
              <div className="control">
                <div className="select">
                  <select
                    value={this.state.selectedCity}
                    onChange={e =>
                      this.setState({ selectedCity: e.target.value })
                    }
                  >
                    <option key="default" value={null}>
                      Selectionnez
                    </option>
                    {this.state.cities.map(city => (
                      <option key={city.id} value={city.id}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            {this.state.selectedCity ? this.renderDistrict() : null}
            {this.state.selectedCity && this.state.selectedDisctict ? this.renderNewsletters() : null}
            <div className="field">
              <label className="label">Catégorie</label>
              <div className="control">
                <div className="select">
                  <select
                    value={this.state.selectedCategory}
                    onChange={e =>
                      this.setState({ selectedCategory: e.target.value })
                    }
                  >
                    <option key="default" value={null}>
                      Selectionnez
                    </option>
                    {this.state.categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">Titre</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  onChange= {e =>
                    this.setState({
                      article: { ...this.state.article, title: e.target.value}
                    })
                  }
                />
              </div>
            </div>
            <div className="field">
              <label className="checkbox">
                <input type="checkbox" onChange={e =>
                  this.setState({ focus: e.target.checked })
                } />
                Article Focus
              </label>
            </div>
            {this.state.focus ? this.renderSubtitle() : null}
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
          </form>
        </div>
      </section>
    );
  }
}

export default BackOffice;
