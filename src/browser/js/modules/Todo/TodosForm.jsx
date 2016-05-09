import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import Helmet from 'react-helmet';
import { autobind } from 'core-decorators';

@injectIntl // TODO use
export default class TodosForm extends Component {
  static propTypes = {
    intl: intlShape.isRequired,
    createTodo: PropTypes.func.isRequired,
    fetchTodos: PropTypes.func.isRequired,
  };

  @autobind
  handleSubmit() {
    const node = this.refs['todo-input'];

    this.props.createTodo(node.value);

    node.value = '';
  }

  render() {
    const { fetchTodos } = this.props;

    return (
      <div className="todo-wrap">
        <Helmet
          title="Home"
        />
        <div className="todo-fetch">
          <input type="submit" value="Fetch!" onClick={fetchTodos} />
        </div>
        <div id="todo-form">
          <input type="text" placeholder="type todo" ref="todo-input" />
          <input type="submit" value="OK!" onClick={this.handleSubmit} />
        </div>
      </div>
    );
  }
}
